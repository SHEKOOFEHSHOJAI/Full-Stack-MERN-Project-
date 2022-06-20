import { useState} from "react";
import './App.css';

function App() {
  const [text,setText]=useState("");
  return (
    <div className="App">
      <div className="continer">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="write something...." 
          value={text}
          onChange={(e)=>setText(e.target.value)} />
          
         
           <div className="add">Add</div>
           <div className="list">List</div>
        </div>
      </div>
    </div>
  );
}

export default App;
