import { useState } from "react";
export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("I want to.......");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
    };
    addTask(newTask);
    setTitle("");
    setDescription("I want to.......");
    setPriority("Low");
    setDueDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">JOE TASKS</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="label">
            <span className="label-text">Task Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter your task..."
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Optional description..."
          ></textarea>
        </div>
        {/* Priority */}
        <div>
          <label className="label">
            <span className="label-text">Priority</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        {/* Due Date */}
        <div>
          <label className="label">
            <span className="label-text">Due Date</span>
          </label>
          <input
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            type="date"
            className="input input-bordered w-full"
          />
        </div>
        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full mt-2">
          Add Task
        </button>
      </form>
    </div>
  );
}
