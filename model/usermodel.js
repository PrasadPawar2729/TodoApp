const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    username:String,
    email:String,
    pass:"String",
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }


})


const userModel = mongoose.model("user",userSchema)

module.exports = {userModel};