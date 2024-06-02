const mongoose = require("mongoose")


const blackListSchema = mongoose.Schema({
    token:String,
    email:String,
   


})


const blacklistModel = mongoose.model("blacklist",blackListSchema )

module.exports = {blacklistModel};