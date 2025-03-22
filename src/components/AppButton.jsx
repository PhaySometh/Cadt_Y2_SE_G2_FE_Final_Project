import React, { useState } from "react";
import { CircleX } from "lucide-react";

function AppButton({ label = "Default" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Button to open popup */}
      <button className="btn" onClick={() => setIsOpen(true)}>
        {label}
      </button>

      {/* Background Blur Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Custom popup */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm z-20">
        <div className="w-100 h-40 bg-[#eee] rounded-sm p-4 shadow-lg relative">
          <p className="text-lg text-center p-2">Adding Task!</p>
          <label className="w-full">
            <input 
              type="text" 
              required 
              placeholder="Task to add" 
              className="w-full p-2 border rounded-sm" 
            />
          </label>
          {/* Close button */}
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <p className=" text-black hover:text-gray-500">
              <CircleX />
            </p>
          </button>
        </div>
      </div>
      
      )}
    </div>
  );
}

export default AppButton;
