const express = require('express')
const app=express()
const port =3000
app.get("/",(req,res)=>{
    var a=5
    var b=6
    var c= a+b

    res.send("hello world")
})
app.listen(port,console.log(`http://localhost:${port}`))