import { useState } from 'react';
import 'tailwindcss';
import SearchBox from '../components/SearchBox';
import AppButton from '../components/AppButton';
import SortBtn from '../components/SortBtn';
import DropdownMenu from '../components/DropdownMenu';

function Product() {
    const [tasks, setTasks] = useState(["eee", "bbbb", "cccc"]);

    function addTask(newTask) {
        if (newTask.trim() !== "") {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        }
    }

    // Function to delete a task
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    // Function to edit a task
    const editTask = (index) => {
        const newTask = prompt("Edit Task:", tasks[index]);
        if (newTask) {
            const updatedTasks = [...tasks];
            updatedTasks[index] = newTask;
            setTasks(updatedTasks);
        }
    };

    // Function to duplicate a task
    const duplicateTask = (index) => {
        setTasks([...tasks, tasks[index]]);
    };


    return (
        <div className="p-4">
        {/* Search and Sort Section */}
        <div className="flex gap-2 justify-center">
            <SearchBox />
            <AppButton label="Add new task" addTask={addTask} />
            <SortBtn />
        </div>

        {/* Task List */}
        <ol className="w-full max-w-md mx-auto mt-10 list-decimal list-inside bg-gray-100 p-4 rounded shadow">
           {tasks.map((task, index) => (
            <li
                key={index}
                className="flex justify-between items-center w-full max-w-3xl bg-white p-2 rounded-sm shadow-sm my-1">
                <span className="flex-1 break-words overflow-hidden text-center">{task}</span>
                <DropdownMenu 
                onEdit={() => editTask(index)}
                onDuplicate={() => duplicateTask(index)}
                onDelete={() => deleteTask(index)}
                />
            </li>
        ))}
        </ol>

        </div>
    );
}
export default Product;
