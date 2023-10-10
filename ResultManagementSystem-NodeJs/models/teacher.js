//importing mongoose
const mongoose = require("mongoose")
const { Schema } = mongoose;
//Teacher schema
const teacherSchema = new Schema({
  email: {
    type : String,
    unique : true
  } ,
  username: {
    type : String,
    unique : true
  },     
  password:String 
});

module.exports = mongoose.model("Teacher", teacherSchema)