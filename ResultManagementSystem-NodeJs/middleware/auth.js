//middleware for authentication
const jwt=require("jsonwebtoken");

const auth=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        const verify= jwt.verify(token,"SECRET");
        console.log(verify);
        next();

    }
    catch(err){
        console.log(err);
        res.redirect("/teacher/login");
    }
}

module.exports=auth;