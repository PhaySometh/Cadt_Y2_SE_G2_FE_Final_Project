'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function SortBtn({ onSort }) {
    const [selectedChoice, setSelectedChoice] = useState('Sort by: Date');
    const [isOpen, setIsOpen] = useState(false);

    const handleSelection = (option) => {
        setSelectedChoice(`Sort by: ${option}`);
        setIsOpen(false);
        onSort(option);
    };

    return (
        <div>
            <details
                className="dropdown"
                open={isOpen}
                onToggle={(e) => setIsOpen(e.target.open)}
            >
                <summary className="btn font-medium bg-[#1a1a1a] text-white flex items-center justify-between text-xs lg:text-md">
                    <span>{selectedChoice}</span>
                    {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </summary>
                <ul className="font-medium bg-[#1a1a1a] border-2 border-white menu dropdown-content rounded-box z-[1] w-[155px] p-2 shadow-lg text-white text-xs">
                    <li>
                        <a onClick={() => handleSelection('Date')}>
                            <p className="text-[#def] text-xs">Date</p>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => handleSelection('Name')}>
                            <p className="text-[#def] text-xs">Name</p>
                        </a>
                    </li>
                </ul>
            </details>
        </div>
    );
}

export default SortBtn;