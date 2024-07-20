const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const router = express.Router();
const JWT_SECRET = require("../config");
const {User} = require("../db");

const signupSchema = zod.object({
    username: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string(),
});

router.post("/signup",async (req,res)=>{
  const body = req.body;
  const {success} = signupSchema.safeParse(req.body);
  if(!success){
    return res.json({
        message: "Inputs are invalid"
    })
  }
  const user = User.findOne({
    username : body.username
  })

  if(user._id){
    return res.json({
        message:"Email alreadt taken"
    })
  }

  const dbUser = await User.create(body);
  const userId =dbUser.username;
  const token = jwt.sign({
    username: userId
  },JWT_SECRET);
  res.json({
    message:"User Created Successfully"
  })
})

module.exports = router