const ToDoModel=require("../ToDoModel");

module.exports.getToDo=async(req,res)=>{
   
   
    const Todo=await ToDoModel.find();
    res.send(Todo)
}
module.exports.saveToDo=async(req,res)=>{
const {text}=req.body;
ToDoModel.create({text})

.then(()=>res.set(201).send("ADDed SuccesFully ...."))
.catch((err)=>console.log(err))
}
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