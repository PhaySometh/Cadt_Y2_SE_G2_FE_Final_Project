import React, { useState } from "react";
import AppButton from "../components/AppButton";

function Product() {
  const [tasks, setTasks] = useState(["eee", "bbbb", "cccc"]);

  function addTask(newTask) {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  }

  return (
    <div className="p-4">
      {/* Search and Sort Section */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded w-60"
        />
        <AppButton label="Add new task" addTask={addTask} />
        <button className="bg-black text-white p-2 rounded">
          Sort by: Date ▼
        </button>
      </div>

      {/* Task List */}
      <ol className="mt-4 list-decimal list-inside bg-gray-100 p-4 rounded">
        {tasks.map((task, index) => (
          <li key={index} className="bg-white p-2 rounded-sm shadow-sm my-1">
            {task}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Product;
