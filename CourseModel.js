const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    CourseName:{
        type:String,
        required:true,
    },
    Credits:{
        type:Number,
        required:true,

    },
    CourseCode:{
        type:String,
        required:true,
        unique:true,
    },
    Hours:{
        type:Number,
        required:true,
     },
    LecturerAssigned:{
        type:String,
        required:true,
        unique:true,
     },
},
   {timeStamps:true}
);
module.exports = new mongoose.model("Course",CourseSchema);
