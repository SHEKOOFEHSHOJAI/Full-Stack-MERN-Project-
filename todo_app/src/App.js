import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Item from "./component/item";
// import { deleteToDo, updateToDo } from "../../controler/ToDoControler";

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/get-todo")
      .then((res) =>setTodo(res.data))
      .catch((err) => console.log(err));
  });

  //ّFUNCTION DELETE

  const deleteToDo=(_id)=>{

  }

//FUNCTON UPDATE

const updateToDo=(_id,text)=>{

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
          <div className="add">Add</div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Item
              key={item._id}
              text={item.text}
              remove={()=>deleteToDo(item._id)}
              update={()=>updateToDo(item._id,text.text)}
            />
          ))}
          <Item />
        </div>
      </div>
    </div>
  );
}

export default App;
