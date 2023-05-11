const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/",(req, res)=>{
     res.send("Welcome to App")
})
app.get("/get-number",(req,res)=>{

  let randomNumber =  Math.floor(Math.random() * (60 - 20 + 1)) + 20;
  res.json({
    age: randomNumber 
  })

})

app.listen(8080,()=>{
    console.log("server started at PORT:8080");
})