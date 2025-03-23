import { useState } from 'react';
import 'tailwindcss';
import SearchBox from '../components/SearchBox';
import AppButton from '../components/AppButton';
import SortBtn from '../components/SortBtn';
import DropdownMenu from '../components/DropdownMenu';

function Product() {
    const [tasks, setTasks] = useState([
        { name: "Do homework", date: "2024-03-20T14:00:00Z" },
        { name: "Buy groceries", date: "2024-03-21T10:30:00Z" },
        { name: "Read a book", date: "2024-03-19T18:45:00Z" },
    ]);

    const [sortBy, setSortBy] = useState("Date");

    function addTask(newTask) {
        if (newTask.trim() !== "") {
            setTasks((prevTasks) => [
                ...prevTasks,
                { name: newTask, date: new Date().toISOString() },
            ]);
        }
    }

    const deleteTask = (taskToDelete) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.date !== taskToDelete.date)
        );
    };
    

    const editTask = (taskToEdit) => {
        const newTaskName = prompt("Edit Task:", taskToEdit.name);
        if (newTaskName) {
          setTasks((prevTasks) =>
            prevTasks.map((task) =>
              task.date === taskToEdit.date ? { ...task, name: newTaskName } : task
            )
          );
        }
    };

    const duplicateTask = (taskToDuplicate) => {
        setTasks((prevTasks) => [
          ...prevTasks,
          {
            ...taskToDuplicate,         // Copy all properties from the task
            date: new Date().toISOString(), // Update the date to a new timestamp
          },
        ]);
      };
      
    

    // Sorting logic
    const sortedTasks = [...tasks].sort((a, b) => {
        if (sortBy === "Date") {
            return new Date(b.date) - new Date(a.date); // Sort by newest first
        } else if (sortBy === "Name") {
            return a.name.localeCompare(b.name); // Sort alphabetically
        }
        return 0;
    });

    return (
        <div className="p-4">
            {/* Search and Sort Section */}
            <div className="flex gap-2 justify-center">
                <SearchBox />
                <AppButton label="Add new task" addTask={addTask} />
                <SortBtn onSort={setSortBy} />
            </div>

            {/* Task List */}
            <ol className="w-full max-w-3xl mx-auto mt-10 list-decimal list-inside bg-gray-100 p-4 rounded shadow">
                {sortedTasks.map((task, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center w-full max-w-3xl bg-white p-2 rounded-sm shadow-sm my-1">
                        <span className="flex-1 break-words overflow-hidden text-center">
                            {task.name} - <span className="text-gray-500 text-sm">{new Date(task.date).toLocaleDateString()}</span>
                        </span>
                        <DropdownMenu 
                            onEdit={() => editTask(task)}
                            onDuplicate={() => duplicateTask(task)}
                            onDelete={() => deleteTask(task)}
                        />
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Product;
