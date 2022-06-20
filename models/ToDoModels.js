const mongoose=require("mongoose");
const todoSchma=new mongoose.Schema({
    text:{


        type:String,
        required:true
    }

   
})