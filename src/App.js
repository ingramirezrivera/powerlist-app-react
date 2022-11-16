import React, { useState } from "react";
import { GiHornedHelm } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

function App() {
  const [tasks, setTasks] = useState(["Mow the lawn", "Clean the house", "Wash the car"]);
  const [input, setInput ] = useState("");

  return (
    <div className="app">
      <div className="container">
        <h1>
          <GiHornedHelm />
          Powerlist
        </h1>

        <form onSubmit={handleSubmit}>
          <AiOutlinePlus />
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Enter Task" type="text" />
        </form>

        {tasks.map((task) => {
          return (
            <div>
              <p>{task}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
