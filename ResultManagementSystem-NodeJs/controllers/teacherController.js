//importing models
const teacherModel = require('../models/teacher');
const studentModel=require("../models/student")
//importing dependencies
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
//secret key for authentication
const SECRET_KEY="SECRET"

let user;

//loin route functionality
const loginPage = (req, res) => {
    res.render("teacher/loginPage",{user:user,res:res});
};

const login=async(req,res)=>{
    const {username,password}=req.body;
    var un=username;
    un=un.trimStart();
    //console.log({username,password});
    try{
        const existingUser=await teacherModel.findOne({username:un});
        user=existingUser;
        if(!existingUser){
            console.log("User does not exist");
            return res.redirect("login");
        }
        //console.log(existingUser);
        const pwdCheck=await bcrypt.compare(password,existingUser.password);
        if(!pwdCheck){
            console.log("Invalid Credentials");
            return res.redirect("login");
        }
        const token=jwt.sign({username:existingUser.username,id:existingUser._id},SECRET_KEY);
        res.cookie("jwt",token,{
            httpOnly:true,
            expires:new Date(Date.now()+2592000)

        });
        console.log("Logged In Successfully");
        //console.log(req.cookies.jwt);
        res.redirect("viewall");


    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong"});
    }
}


//signup route
const signupPage = (req, res) => {
    res.render("teacher/signupPage");
};
const signup= async(req,res)=>{
    const {email,username,password}=req.body;
    try{
        const existingUser=await teacherModel.findOne({
            "$or": [{
                "email": email
            }, {
                "username": username
            }]
        });
        //console.log(existingUser);
        if(existingUser){
            console.log("User already exists");
            return res.redirect("signup");
        }

        const securepwd=await bcrypt.hash(password,10);
        const teacher=await teacherModel.create({
            email:email,
            username:username,
            password:securepwd
        });

        const token=jwt.sign({username:teacher.username,id:teacher._id},SECRET_KEY);
        res.cookie("jwt",token,{
            httpOnly:true,
            expires:new Date(Date.now()+2592000)

        });
        console.log(token);
        console.log("Teacher Registered Successfully")
        res.redirect("login");
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong"});
    }
}

//logout functionality
const logout=async(req,res)=>{
    user=null;
    res.clearCookie("jwt");
    res.redirect("/");
}

//to show all records
const viewall = async (req, res) => {
    console.log(`This is cookie- ${req.cookies.jwt}`);
    var page=1;
    if(req.query.page){
        page=req.query.page;
    }
    const limit=3;
    const records=await studentModel.find()
    .sort({rollno:1})
    .limit(limit*1)
    .skip((page-1)*limit)
    .exec();
    const no_records=await studentModel.find();
    console.log(no_records.length);
    res.render("teacher/viewRecords",{records:records,user:user,res:res,total:no_records,totalPages:Math.ceil(no_records.length/limit),cp:page});
};

//to add records functionality
const addRecordsPage = (req, res) => {
    res.render("teacher/addRecord",{user:user,res:res});
};
const addRecords = async (req, res) => {
    const {rollno,name,dob,score}=req.body;
    try {
        const existingRecord=await studentModel.findOne({rollno:rollno});
        //console.log(existingUser);
        if(existingRecord){
            return res.status(400).json({message:"Record already exists"});
        }

        const newRecord=await studentModel.create({
            rollno:rollno,
            name:name,
            dob:dob,
            score:score
        });
        res.redirect("viewall");
      } catch {
        res.send("error")
    }
};

//to delete records
const delRecord =async (req, res) => {
    const temp=await studentModel.findByIdAndDelete(req.params.id)
    res.redirect("/teacher/viewall")
};

//to edit records
const editRecordPage=async (req,res)=>{
    const record=await studentModel.findById(req.params.id);
    res.render("teacher/editRecord",{record:record,user:user,res:res});
}

const editRecordFunc=async(req,res)=>{
    const record = await studentModel.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/teacher/viewall")
}
//exporting teacher controller functions
module.exports={
    loginPage,
    signupPage,
    signup,
    login,
    viewall,
    addRecordsPage,
    addRecords,
    delRecord,
    editRecordPage,
    editRecordFunc,
    logout
}