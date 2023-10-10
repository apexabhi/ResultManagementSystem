//importing express framework
const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
//setting view engine
app.set("view engine","ejs");

//enabling express ejs layouts
var ejsLayouts = require('express-ejs-layouts');
app.use(ejsLayouts);
app.set('layout', 'layouts/layout');

//middlewares
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use((req, res, next) => {

    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  
    next();
  
});
//connectiong to db
const mongoose=require("mongoose");
const url="mongodb+srv://apexabhi:abhishek@apexdb.zmhpnpj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("database connected successfully!!");
}).catch((err)=>{
    console.log("Connection can't established");
})

//home routes
app.get("/",(req,res)=>{
    res.render("index");
})
//teacher and student routes
const teacherRoutes = require("./routes/teacherRoutes")
const studentRoutes = require("./routes/studentRoutes")
app.use("/teacher",teacherRoutes);
app.use("/student",studentRoutes);
//page not found routes
app.use((req, res, next) => {
    res.status(404).render('pagenotfound');
});



//starting server
app.listen(3000,()=>{
    console.log("Server started successfully");
})
