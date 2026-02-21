import React from "react";

function PriorityFilter({ selectedPriority, onChange }) {
  return (
    <div className="w-full max-w-xs mx-auto mb-6">
      <label className="label">
        <span className="label-text font-bold text-white">
          Filter by Priority
        </span>
      </label>
      <select
        className="select select-bordered w-full text-black bg-white hover:bg-gray-100 transition"
        value={selectedPriority}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}

export default PriorityFilter;
