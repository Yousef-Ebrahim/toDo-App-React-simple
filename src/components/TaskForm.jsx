import "./TaskForm.css";
import Tag from "./Tag";
import { useState } from "react";
function TaskForm() {
  const [task, setTask] = useState("");
  console.log(task);
  return (
    <div>
      <form action="" className="task_form_bottom_line">
        <input
          className="task_input"
          value={task}
          type="text"
          placeholder="Add Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="task_submit">Add</button>
      </form>
      <Tag TagName="HTML" />
      <Tag TagName="CSS" />
      <Tag TagName="JavaScript" />
      <Tag TagName="React" />
      <select name="" id="">
        <option value="">TODO</option>
        <option value="">DOING</option>
        <option value="">DONE</option>
      </select>
    </div>
  );
}

export default TaskForm;
