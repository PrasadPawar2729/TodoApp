const express=require("express")
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken")
const { userModel } = require("../model/usermodel");
const userRouter=express.Router()



//get the user
userRouter.get("/user",async(req,res)=>{
    try{

     const user = await userModel.find()
     res.status(201).send(user)


    }
    catch(err){
        res.status(500).send(err)
    }
})






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


//login the user 

userRouter.post("/login",async(req,res)=>{

const {email,pass}=req.body;

    try{
       //check if the user is registred or not
       const user=await userModel.findOne({email})
       if(!user){
           res.status(404).send("user not found")
       }
       //check pass is match or not 
       //if pass is correct send the token
       
      bcrypt.compare(pass,user.pass,(err,result)=>{
        if(err){
            res.status(500).send(err)
        }
        const token = jwt.sign({userID:user._id},"prasad")
       
        res.status(200).json({msg:"login successfully",token})
    
    })

       
    }
    catch(err){
        res.status(500).send(err)
    }
})













module.exports={userRouter};