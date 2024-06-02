const express=require("express")
const bcrypt=require("bcrypt");
const { userModel } = require("../model/usermodel");
const userRouter=express.Router()

//register the user
userRouter.post("/register",async(req,res)=>{
   
  const {username,email,pass,role}=req.body; 
    try{

      //logic for converted pass to hash
     bcrypt.hash(pass,5,async(err,hash)=>{

        if(err){
            res.status(500).sendDate(err)
        }
         else{
            const user = new userModel({
                username,
                email,
                pass:hash,
                role
            })

           await user.save() 
            res.status(200).send("user created ")
         }

     })



    }
    catch(err){
        console.log(err)
    }
})

module.exports={userRouter};