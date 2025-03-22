import { useState } from 'react';
import 'tailwindcss';
import SearchBox from '../components/SearchBox';
import AppButton from '../components/AppButton';
import SortBtn from '../components/SortBtn';
import DropdownMenu from '../components/DropdownMenu';

export function Product() {
    const [count, setCount] = useState(0);

    const [newTask, setNewTask] = useState("");

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        
    }

    return (
        <>
            <div className="bg-gray-200 p-5 rounded-lg">
                <h1 className="text-black font-bold my-5">
                    Chlart Task Manager
                </h1>
                <div className="flex flex-col gap-5 items-center">
                    <SearchBox />
                    <div className="flex justify-center gap-5">
                        <AppButton label="Add new task" />
                        <SortBtn />
                    </div>
                </div>
                <div className="mt-5 flex flex-col gap-5 bg-gray-50 p-5 rounded-lg">
                    <h2 className="text-black font-bold my-5 text-5xl">
                        Your task
                    </h2>
                    <div className="w-full bg-black rounded-lg p-2 text-white flex justify-between items-center">
                        <div>
                            <h3 className="text-2xl">Task 1</h3>
                        </div>
                        <DropdownMenu />{' '}
                        {/* This should now be aligned with your task bar */}
                    </div>
                </div>
            </div>
        </>
    );
}
