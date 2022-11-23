import React, { useState } from "react";
import { GiHornedHelm } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

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

  const date = new Date();
  console.log(date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="app">
      <div className="container">
        <h1>
          <GiHornedHelm />
          Powerlist
        </h1>

        <div className="date">
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()},</p>
          <p>{months[date.getMonth()]}</p>
        </div>
        <div className="form-input">
          <form onSubmit={handleSubmit}>
            <AiOutlinePlus className="icon"/>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Task"
              type="text"
            />
          </form>
        </div>

        {tasks.map((task) => {
          return (
            <div key={task.id} className="task-row">
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
