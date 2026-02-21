export default function TaskCard({
  id,
  deleteTask,
  title,
  description,
  priority,
  dueDate,
  completedTask,
  isCompleted,
}) {
  return (
    <div
      className={`card overflow-hidden shadow-lg p-4 border transition duration-300 
  ${
    isCompleted
      ? "bg-green-100 border-green-400"
      : "bg-base-100/50 backdrop-blur-md border-gray-200"
  }`}
    >
      <h3
        className={`text-lg font-bold ${isCompleted ? "text-green-700 line-through" : ""}`}
      >
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-700 mt-1">{description}</p>
      )}
      <div className="flex justify-between items-center mt-3 text-sm">
        <span className={`badge ${getPriorityColor(priority)}`}>
          {priority}
        </span>
        {dueDate && <span className="text-gray-500">Due: {dueDate}</span>}
        <button
          type="button"
          className="flex items-center gap-2 text-gray-500 border border-gray-400 px-3 py-1 rounded-lg cursor text-sm "
          onClick={() => completedTask(id)}
        >
          {isCompleted ? "✔ Completed" : "✔ Mark Complete"}{" "}
        </button>

        <button
          onClick={() => deleteTask(id)}
          type="button"
          className="btn btn-sm btn-error btn-outline hover:scale-105 transition duration-200"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

function getPriorityColor(priority) {
  switch (priority) {
    case "High":
      return "badge-error";
    case "Medium":
      return "badge-warning";
    default:
      return "badge-success";
  }
}
