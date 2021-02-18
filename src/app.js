const { json } = require("express");
const express = require("express");
const app = express();
require("./db/conn");
const students = require("./models/students")
const score = require("./models/score")
const port = process.env.PORT || 7000;

app.use(express.json());
app.get("/" ,(req , res)=> {
    res.send("Just Testing")
})


//Inserting the data with the help of POSTMAN API
app.post("/students" ,(req , res)=> {
    console.log(req.body);
    const user = new students(req.body);
    user.save().then(()=> {
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(401).send(e);
    })
     
})
//Ending Here


//Assigning Socre With the Help of POSTMAN API
app.post("/score",(req,res)=>{
    console.log(req.body);
    const userscore = new score(req.body);
    userscore.save().then(()=> {
        res.status(201).send(userscore);
    }).catch((e)=>{
        res.status(401).send(e);
    })
})
//Ending Here

//Get an Highest Score With an API
app.get("/score" , async(req,res)=>{
    try{
       const resultscore = await score.find();
       res.send(resultscore);
    }catch(e){
        res.send(e);
    }
})
//Ending here

app.listen(port,()=>{
    console.log(`Connection Created Successfully at ${port}`);
})