

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text:{
    type:String,
    required:true,
   
  }
});

module.exports = mongoose.model("ToDo", todoSchema);

//6037 9972 4586 5853
