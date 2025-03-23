// src/Product.jsx
import { useState } from "react";
import SearchBox from "../components/SearchBox";
import TaskForm from "../components/TaskForm";
import TaskDetails from "../components/TaskDetails";
import SortBtn from "../components/SortBtn";

function Product() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showTaskDetails, setShowTaskDetails] = useState(null);
  const [sortOption, setSortOption] = useState("Date");

  // Filter tasks based on search query
  const filteredTasks = tasks.filter((task) => {
    if (!searchQuery) return true;
    const matchesName = task.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDescription = task.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesName || matchesDescription;
  });

  // Sort filtered tasks
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOption === "Date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortOption === "Name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // Highlight matching text
  const highlightMatch = (text) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <span key={index} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Check if match is in description only
  const isMatchInDescriptionOnly = (task) => {
    if (!searchQuery) return false;
    const matchesName = task.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDescription = task.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return !matchesName && matchesDescription;
  };

  const addTask = (title, description, date) => {
    setTasks([...tasks, { name: title, description, date, isComplete: false }]);
    setShowTaskForm(false);
  };

  const updateTask = (title, description, date) => {
    setTasks(tasks.map((t) =>
      t === showTaskForm ? { ...t, name: title, description, date } : t
    ));
    setShowTaskForm(false);
  };

  const editTask = (task) => {
    setShowTaskForm(task);
    setShowTaskDetails(null); // Close TaskDetails when edit form opens
  };

  const toggleComplete = (task) => {
    setTasks(tasks.map((t) =>
      t === task ? { ...t, isComplete: !t.isComplete } : t
    ));
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
    setShowTaskDetails(null);
  };

  const duplicateTask = (task) => {
    setTasks([...tasks, { ...task, name: task.name + " (Copy)" }]);
    setShowTaskDetails(null);
  };

  return (
    <div className="p-6 py-16 flex flex-col justify-center text-center item-center">
      <div className="bg-gray-200 flex flex-col justify-center text-center item-center rounded-lg p-20 mx-50 ">
        <h1 className="text-5xl font-bold mb-4">Chlart Task Manager</h1>
        <SearchBox value={searchQuery} onSearch={setSearchQuery} />
        <div className="flex flex-row mt-10 justify-center">
          <button
            className="bg-blue-500 text-white px-4 rounded"
            onClick={() => setShowTaskForm(true)}
          >
            + Add Task
          </button>
          <SortBtn onSort={setSortOption} />
        </div>
        <div className="mt-4">
          {filteredTasks.length === 0 && searchQuery ? (
            <p className="text-red-500">No tasks found for "{searchQuery}"</p>
          ) : (
            <ul className="space-y-2">
              {sortedTasks.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white p-2 rounded shadow-sm my-1 cursor-pointer"
                  onClick={() => setShowTaskDetails(task)}
                >
                  <div className="flex-1 flex items-center">
                    <span
                      className={`mr-2 ${task.isComplete ? "line-through text-gray-500" : ""}`}
                    >
                      {highlightMatch(task.name)}
                    </span>
                    {isMatchInDescriptionOnly(task) && (
                      <span className="text-sm text-gray-500 italic">
                        (Found in description)
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleComplete(task);
                    }}
                    className={`ml-3 px-2 py-1 rounded ${task.isComplete ? "bg-green-500" : "bg-gray-200"}`}
                  >
                    {task.isComplete ? "✔ Done" : "Incomplete"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {showTaskDetails && (
          <TaskDetails
            task={showTaskDetails}
            onClose={() => setShowTaskDetails(null)}
            onEdit={() => editTask(showTaskDetails)}
            onDuplicate={() => duplicateTask(showTaskDetails)}
            onDelete={() => deleteTask(showTaskDetails)}
          />
        )}
        {showTaskForm && (
          <TaskForm
            onSave={typeof showTaskForm === "object" ? updateTask : addTask} // Use updateTask for editing, addTask for new
            onCancel={() => setShowTaskForm(false)}
            editingTask={typeof showTaskForm === "object" ? showTaskForm : null}
          />
        )}
      </div>
    </div>
  );
}

export default Product;