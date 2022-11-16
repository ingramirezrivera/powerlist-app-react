import React, { useState } from "react";
import { GiHornedHelm } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { CLOSING } from "ws";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add task
  const handleSubmit = (e) => {
    e.preventDefault();
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false,
    };
    setTasks([...tasks, addTask]);
    setInput("");
  };

  // Delete task
  const deleteTask = (id) => {
    console.log(id);
    console.log(tasks);
    let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id);
    setTasks(filteredTasks);
  };

  // toggle completed Task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    console.log(id);
    console.log(tasks);
  };

  const date = new Date()
  console.log(date)

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
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Task"
            type="text"
          />
        </form>

        {tasks.map((task) => {
          return (
            <div key={task.id}>
              <p
                onClick={() => {
                  toggleComplete(task.id);
                }}
              >
                {task.text}{" "}
              </p>
              <button
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
