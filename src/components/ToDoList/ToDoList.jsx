import { useState } from "react";
import ListItem from "../ListItem/ListItem";

function ToDoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      input: "Make pasta",
      completed: true,
    },
  ]);

  const [input, setInput] = useState("");
  function addTask(input) {
    const newTask = {
      id: Date.now(),
      input,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => addTask(input)}>Add</button>
      {tasks.map((task) => (
        <ListItem key={task.id} task={task} toggleCompleted={toggleCompleted} />
      ))}
    </>
  );
}

export default ToDoList;
