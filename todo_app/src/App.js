import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Item from "./component/item";

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/get-todo")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });
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
          <Item />
        </div>
      </div>
    </div>
  );
}

export default App;
