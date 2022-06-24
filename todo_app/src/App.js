import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Item from "./component/item";
// import { updateMany } from "../../models/ToDoModels";
// import { deleteToDo, updateToDo } from "../../controler/ToDoControler";

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [updating, setupdating] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/get-todo")
      .then((res) =>{
        console.log(res.data);
       
      })
      .catch((err) => console.log(err));
  });

  
  //FUNCTON UPDATE
  
  const addUpdate = (_id, text) => {
    if (updating === "") {
      axios
        .post("http://localhost:5000/save-todo", { text })
        .then((res) => {
          setTodo(res.data);
                                                                
          setTodo("");
        })
        .catch((err) => console.log(err));
    } 
    
    else {
      axios
        .post("http://localhost:5000/update-todo", { _id: updating, text })
        .then((res) => {
          console.log(res.data);
          setText("");
          setupdating("");
        })
        .catch((err) => console.log(err));
    }
  };


  //
  const updateTodo = (_id, text) => {

    setupdating(_id)
    setText(text)
  }
  
  //ّFUNCTION DELETE

  const deleteToDo=(_id)=>{

     axios
        .post("http://localhost:5000/delete-todo", { _id })
        .then((res) => {
          console.log(res.data);
          
          setupdating("");
        })
        .catch((err) => console.log(err));
    

  }
  return (
    <div className="App">
      <div className="continer">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="write something...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* add */}
          <div className="add" onClick={addUpdate}>
            
            {updating? "update": "Add"}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Item
              key={item._id}
              text={item.text}
              remove={() => deleteToDo(item._id)}
              update={() => updateTodo(item._id, text.text)}
            />
          ))}
          <Item />
        </div>
      </div>
    </div>
  );
}

export default App;
