const express=require("express");
const app=express();

const port=8080;
const path=require("path");//To use this folder such as public and view in index.js we reqire this path
app.use(express.urlencoded({extended:true}));//This line configures the Express app to use the express.urlencoded middleware, which parses incoming requests with URL-encoded payloads (from HTML form submissions). The { extended: true } option allows nested objects in the URL-encoded data.This line allows the Express app to handle form data sent through a POST request. The { extended: true } option lets it handle more complex data, like nested objects.

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

const {v4:uuidv4}=require("uuid");

const { faker } = require('@faker-js/faker');//random images

const  methodOverride = require('method-override');
app.use(methodOverride('_method'));



let posts=[
    {
        id:uuidv4(),
        username:"Hrurtuja",
        content:"I love Coding",
        img:faker.image.url(),
    },
    {
        id:uuidv4(),
        username:"Rushikesh",
        content:"Professional Actor",
        img:faker.image.url()
    },
    {
        id:uuidv4(),
        username:"Rahul",
        content:"Farmer",
        img:faker.image.url()
    }
];
app.get("/posts",(req,res)=>{
    
   res.render("index.ejs",{posts});
});


app.get("/posts/new",(req,res)=>{
res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
   
     let id=uuidv4();
     let img=faker.image.url();
    let {username,content}=req.body;
    posts.push({id,username,content,img});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let ps=posts.find((p)=> id === p.id);
    res.render("show.ejs",{ps});
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let ps=posts.find((p)=> id === p.id);
    res.render("edit.ejs",{ps});
});

app.patch("/posts/:id",(req,res)=>{
    let {id,username}=req.params;
    let newcon=req.body.content;
    let newuser=req.body.username;
    let ps=posts.find((p)=> id === p.id);
    ps.content=newcon;
    ps.username=newuser;
    res.redirect("/posts");
});
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
    
});
app.listen(port,(req,res)=>{
    console.log(`Listining on port ${port}`);
});
