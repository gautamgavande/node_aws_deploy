const express=require('express')
const app=express()
// const port=process.env.PORT || 3000

app.get("/api/get",(req,res)=>{
    res.send({message:"node js aws deployment"})
})

app.listen(8000,()=>{
    console.log(`server runing on port 8000`)
})