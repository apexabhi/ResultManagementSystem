//importing models
const studentModel=require("../models/student");

//login functionality
const loginPage=(req,res)=>{
    res.render("student/login")
}

//to find result
const findResult=async(req,res)=>{
    try{
    const {rollno,dob} = req.body;   
        const result = await studentModel.findOne({rollno : rollno, dob : dob});        
        res.render("student/showRecord", { result : result});
    }
    catch(err){
        console.log('error');
    }
}

//exporting teacher controller functions
module.exports={
    loginPage,
    findResult

}