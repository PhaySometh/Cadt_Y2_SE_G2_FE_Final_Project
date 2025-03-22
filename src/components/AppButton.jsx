import React, { useState } from "react";
import { CircleX } from "lucide-react";

function AppButton({ label, addTask }) {
  const [isOpen, setIsOpen] = useState(false);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    addTask(newTask);
    setNewTask("");
    setIsOpen(false); // Close popup after adding
  }

  return (
    <div className="relative inline-block">
      {/* Button to open popup */}
      <button className="border p-2 rounded" onClick={() => setIsOpen(true)}>
        {label}
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm z-20">
          <div className="w-96 bg-white rounded-sm p-4 shadow-lg relative">
            <p className="text-lg text-center p-2">Adding Task!</p>
            <input
              type="text"
              required
              placeholder="Task to add"
              className="w-full p-2 border rounded-sm"
              value={newTask}
              onChange={handleInputChange}
            />
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <CircleX />
            </button>
            <button
              className="text-sm mt-2 w-full h-10 bg-blue-500 p-2 rounded text-white hover:bg-blue-700"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppButton;