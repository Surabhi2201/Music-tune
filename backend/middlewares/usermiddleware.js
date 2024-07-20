const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");


function userMiddleware(req, res, next){
    const token = req.headers.authorization;
    if(!token || !token.startsWith('Bearer ')){
        return res.status(403).json({});
    }
    const words = token.split(" ");
    const jwtToken = words[1];
    
    try{
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if(decodedValue.userId){
            req.userId = decodedValue.userId
            next();
        } 
    }

    catch(err){
        return res.status(403).json({});
    }

   
}

module.exports= userMiddleware;