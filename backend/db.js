const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://surabhisci2201:Surabhi%401709@surabhi.0kh2ink.mongodb.net/Dtunes");

const userSchema = mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    password:String,
});

const User = mongoose.model("User",userSchema);
module.exports=({
    User
})