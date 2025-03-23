// src/components/TaskDetails.jsx
import { useState } from "react";

function ConfirmationDialog({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-40">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p>Are you sure you want to delete this task?</p>
        <div className="mt-4 flex justify-end gap-3">
          <button onClick={onCancel} className="text-gray-500 hover:text-black">Cancel</button>
          <button onClick={onConfirm} className="text-red-500 hover:text-red-700">Delete</button>
        </div>
      </div>
    </div>
  );
}

function TaskDetails({ task, onClose, onEdit, onDuplicate, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-30">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold">{task.name}</h2>
        <div className="my-8 ">
          <h2 className="text-lg text-gray-500 text-start ">Description</h2>
          <p className="border-2 border-gray-200 rounded-lg p-4 text-start">{task.description}</p>
        </div>
        <p className="mt-2 text-gray-500">📅Date: {task.date}</p>

        <div className="flex justify-end gap-3 mt-4">
          <button onClick={onClose} className="text-gray-500 px-4 py-2 rounded-sm bg-gray-100 hover:text-black">Close</button>
          <button onClick={onEdit} className="text-blue-500 px-4 py-2 rounded-sm bg-blue-100 hover:text-blue-700">Edit</button>
          <button onClick={onDuplicate} className="text-green-500 px-4 py-2 rounded-sm bg-green-100 hover:text-green-700">Duplicate</button>
          <button onClick={() => setShowConfirmation(true)} className="text-red-500 px-4 py-2 rounded-sm bg-red-100 hover:text-red-700">Delete</button>
        </div>

        {showConfirmation && (
          <ConfirmationDialog
            onConfirm={() => {
              onDelete();
              setShowConfirmation(false);
            }}
            onCancel={() => setShowConfirmation(false)}
          />
        )}
      </div>
    </div>
  );
}

export default TaskDetails;