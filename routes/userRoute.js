const express=require("express")

const userRouter=express.Router()


userRouter.get("/",async(req,res)=>{
    try{

        res.send("hello bhai")
    }
    catch(err){
        console.log(err)
    }
})

module.exports={userRouter};