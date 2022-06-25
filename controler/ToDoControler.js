const ToDoModel=require("../models/ToDoModels");

//GET TODO
module.exports.getToDo=async(req,res)=>{
   
   
    const Todo = await ToDoModel.find();
    res.send(Todo)
}

//SAVE

module.exports.saveToDo = (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text })
    .then(() => res.set(201).send("Added Successfully..."))
    .catch((err) => console.log(err));
};

//DELETE
module.exports.deleteToDo=(req,res)=>{
    const {_id}=req.body;
    ToDoModel.findByIdAndDelete(_id)
      .then(() => res.set(201).send("delete SuccesFully ...."))
      .catch((err) => console.log(err));

}


//UPDATE

module.exports.updateToDo = (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("update SuccesFully ...."))
    .catch((err) => console.log(err));
};