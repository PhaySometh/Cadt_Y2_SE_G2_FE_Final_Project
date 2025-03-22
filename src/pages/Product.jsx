import { useState } from "react";
import "tailwindcss";
import SearchBox from "../components/SearchBox";
import AppButton from "../components/AppButton";
import SortBtn from "../components/SortBtn";
import DropdownMenu from "../components/DropdownMenu";

function Product() {
    const [tasks, setTasks] = useState([
        { name: "Do homework", date: "2024-03-20T14:00:00Z" },
        { name: "Buy groceries", date: "2024-03-21T10:30:00Z" },
        { name: "Read a book", date: "2024-03-19T18:45:00Z" },
    ]);

    const [sortBy, setSortBy] = useState("Date");
    const [searchQuery, setSearchQuery] = useState("");

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

    const editTask = (index) => {
        const newTask = prompt("Edit Task:", tasks[index].name);
        if (newTask) {
            const updatedTasks = [...tasks];
            updatedTasks[index].name = newTask;
            setTasks(updatedTasks);
        }
    };

    const duplicateTask = (index) => {
        setTasks([...tasks, { ...tasks[index], date: new Date().toISOString() }]);
    };

    // Search filter logic (case insensitive, checks if input matches any part of task name)
    const filteredTasks = tasks.filter((task) =>
        task.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sorting logic
    const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (sortBy === "Date") {
            return new Date(b.date) - new Date(a.date);
        } else if (sortBy === "Name") {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });

    return (
        <div className="p-4">
            {/* Search and Sort Section */}
            <div className="flex gap-2 justify-center">
                <SearchBox onSearch={setSearchQuery} />
                <AppButton label="Add new task" addTask={addTask} />
                <SortBtn onSort={setSortBy} />
            </div>

            {/* Task List */}
            <ol className="w-full max-w-3xl mx-auto mt-10 list-decimal list-inside bg-gray-100 p-4 rounded shadow">
                {sortedTasks.length > 0 ? (
                    sortedTasks.map((task, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center w-full max-w-3xl bg-white p-2 rounded-sm shadow-sm my-1"
                        >
                            <span className="flex-1 break-words overflow-hidden text-center">
                                {task.name} -{" "}
                                <span className="text-gray-500 text-sm">
                                    {new Date(task.date).toLocaleDateString()}
                                </span>
                            </span>
                            <DropdownMenu
                                onEdit={() => editTask(index)}
                                onDuplicate={() => duplicateTask(index)}
                                onDelete={() => deleteTask(task)}
                            />
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No tasks found.</p>
                )}
            </ol>
        </div>
    );
}

export default Product;
