import TaskForm from "./components/TaskForm";
import "./App.css";
import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import PriorityFilter from "./components/priorityFilter";
function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [selectedPriority, setSelectedPriority] = useState("All");
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const completedTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const priorityOrder = ["High", "Medium", "Low"];
  const selectedPriorityChoice = (value) => {
    setSelectedPriority(value);
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-base-200 to-base-300 py-10">
      <div className="max-w-xl mx-auto space-y-6">
        {" "}
        <PriorityFilter
          selectedPriority={selectedPriority}
          onChange={selectedPriorityChoice}
        />
        <TaskForm addTask={addTask} />
        {tasks
          .slice()
          .sort((a, b) => {
            return (
              priorityOrder.indexOf(a.priority) -
              priorityOrder.indexOf(b.priority)
            );
          })
          .filter(
            (task) =>
              selectedPriority === "All" || task.priority === selectedPriority,
          )
          .map((task) => (
            <TaskCard
              deleteTask={deleteTask}
              key={task.id}
              title={task.title}
              description={task.description}
              priority={task.priority}
              dueDate={task.dueDate}
              id={task.id}
              completedTask={completedTask}
              isCompleted={task.isCompleted}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
