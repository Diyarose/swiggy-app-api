const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const adminModel=require("./models/admin")

const app=express()
app.use(cors())
app.use(express.json())

app.get("/test",(req,res)=>{
    res.json({"status":"success"})
})


app.post("/adminSignup",(req,res)=>{
    let input=req.body
    let hashedpassword=bcrypt.hashSync(input.password,10)
    //console.log(hashedpassword)
    input.password=hashedpassword
    console.log(input)
    let result=new loginModel(input)
    result.save()
    res.json({"status":"success"})
    
})

app.listen(8080,()=>{
    console.log("Server started")
})