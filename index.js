const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/userRoute");

const app = express()

const port =2021;

app.use(express.json())
app.use("/",userRouter)



app.listen(port,async()=>{
    try{
        await connection
        console.log("connected to db")
        console.log(`server is running on port ${port}`)
    }
    catch(err){
        console.log(err)
    }
})