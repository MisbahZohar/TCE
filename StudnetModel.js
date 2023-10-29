const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Usn:{
        type:String,
        required:true,
        Unique:true,

    },
    Gender:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Mobile:{
        type:Number,
        required:true,
        unique:true,
     },
     Password:{
        type:String,
        required:true,
   },
},
   {timeStamps:true}
);
module.exports = new mongoose.model("Student",StudentSchema);
