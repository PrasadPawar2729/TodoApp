const express=require("express")
const { auth } = require("../middleware/auth")
const { access } = require("../middleware/access")
const todoModel = require("../model/todomodel")

const todoRouter = express()


todoRouter.get("/todo", auth,access("user","admin"),async(req, res) => {
   try{

     const todos = await todoModel.find()
     res.status(200).send(todos)

   }
   catch(err){
    res.status(500).send(err.message)
   }
})

todoRouter.post("/todo",auth,access("admin"),async(req,res)=>{
    try{

       const todo = new todoModel(req.body)
       await todo.save()
       res.status(201).send("todo added successfully")





    }
    catch(err){
        res.status(500).send(err.message)
    }
})

todoRouter.patch("/todo/:id",auth,access("admin"),async(req,res)=>{
    try{
       
        await todoModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(201).send("todo updated successfully")

    }
    catch(err){
        res.status(500).send(err.message)
    }
})


todoRouter.delete("/todo/:id",auth,access("admin"),async(req,res)=>{
    try{
 

        await todoModel.findByIdAndDelete(req.params.id)
        res.status(201).send("todo deleted successfully")
    }
    catch(err){
        res.status(500).send(err.message)
    }
})



module.exports={todoRouter}