const mongoose=require("mongoose")

const todoSchema = mongoose.Schema({

title:{type:String},

description:{type:String},

status:{type:Boolean,default:false}


})

const todoModel= mongoose.model("todos",todoSchema)

module.exports=todoModel;