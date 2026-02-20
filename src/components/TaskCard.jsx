export default function TaskCard({
  deleteTask,
  title,
  description,
  priority,
  dueDate,
}) {
  return (
    <div className="card  overflow-hidden bg-base-100/50 backdrop-blur-md shadow-lg p-4 border border-gray-200">
      <h3 className="text-lg font-bold">{title}</h3>

      {description && (
        <p className="text-sm text-gray-700 mt-1">{description}</p>
      )}

      <div className="flex justify-between items-center mt-3 text-sm">
        <span className={`badge ${getPriorityColor(priority)}`}>
          {priority}
        </span>
        {dueDate && <span className="text-gray-500">Due: {dueDate}</span>}

        <button
          onClick={deleteTask}
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
