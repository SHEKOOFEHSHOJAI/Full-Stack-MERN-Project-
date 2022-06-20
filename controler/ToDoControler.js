const ToDoModel=require("../ToDoModel");

//GET TODO
module.exports.getToDo=async(req,res)=>{
   
   
    const Todo=await ToDoModel.find();
    res.send(Todo)
}

//SAVE

module.exports.saveToDo=async(req,res)=>{
const {text}=req.body;
ToDoModel.create({text})

.then(()=>res.set(201).send("ADDed SuccesFully ...."))
.catch((err)=>console.log(err))
}

//DELETE
module.exports.deleteToDo=(req,res)=>{
    const {id}=req.body;
    ToDoModel.findByIdUpdate(id)
      .then(() => res.set(201).send("delete SuccesFully ...."))
      .catch((err) => console.log(err));

}


//UPDATE

module.exports.updateToDo = (req, res) => {
  const { id,text } = req.body;
  ToDoModel.findByIdUpdate(id,{text})
    .then(() => res.set(201).send("update SuccesFully ...."))
    .catch((err) => console.log(err));
};