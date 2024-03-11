const express= require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const  app=express();
const mainRouter= require("./routes/index");

const Port=3000;

app.use(cors());


app.use(bodyParser.json())

app.use("/api/v1",mainRouter);

app.listen(Port,(req,res)=>{
    console.log("listening tp port 3000")
});