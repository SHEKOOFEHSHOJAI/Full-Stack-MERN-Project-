const mongoose=require("mongoose");

const todoSchma=new mongoose.Schema({
    text:{


        type:String,
        required:true
    }

   
})

module.exports=mongoose.model("ToDo",todoSchma);

//6037 9972 4586 5853