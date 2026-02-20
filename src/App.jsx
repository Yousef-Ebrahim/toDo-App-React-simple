import TaskForm from "./components/TaskForm";
import "./App.css";
import { useState } from "react";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-base-200 to-base-300 py-10">
      <div className="max-w-xl mx-auto space-y-6">
        {" "}
        <TaskForm addTask={addTask} />
        {tasks.map((task) => (
          <TaskCard
            deleteTask={deleteTask}
            key={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            dueDate={task.dueDate}
            id={task.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
