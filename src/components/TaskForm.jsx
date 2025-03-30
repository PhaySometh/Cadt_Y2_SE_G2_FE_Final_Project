// src/components/TaskForm.jsx
import { useState, useEffect } from "react";

function TaskForm({ onSave, onCancel, editingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.name || "");
      setDescription(editingTask.description || "");
      setDate(editingTask.date?.split("T")[0] || "");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !date.trim()) {
      setError("All fields are required.");
      return;
    }

    onSave(title, description, date);
    setTitle("");
    setDescription("");
    setDate("");
    setError("");
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-40"> {/* Changed to z-40 */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4 text-blue-600">{editingTask ? "Edit Task" : "Add New Task"}</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <label className="block mb-1 font-bold text-start text-blue-400">Title</label>
        <input
          type="text"
          className="w-full p-2 border border-color-400 text-gray-700 mb-3 rounded focus:outline-none focus:border-blue-600"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label className="block mb-1 font-bold text-start text-blue-400">Description</label>
        <textarea
          className="w-full p-2 border mb-3 rounded focus:border-blue-600 foucs:outline-none text-gray-700"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label className="block mb-1 font-bold text-start text-blue-400">Date</label>
        <input
          type="date"
          className="w-full p-2 border mb-4 rounded focus:border-blue-600 focus:outline-none text-gray-700"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <div className="flex justify-end gap-3">
          <button type="button" onClick={onCancel} className="text-red-500 hover:text-red-700">
            Cancel
          </button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;