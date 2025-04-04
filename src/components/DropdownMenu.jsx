import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
    ChevronDownIcon,
    PencilIcon,
    Square2StackIcon,
    TrashIcon,
} from '@heroicons/react/16/solid';

export default function DropdownMenu({ onEdit, onDuplicate, onDelete }) {
    return (
        <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-200 py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-black/10 focus:outline-none data-[hover]:bg-gray-400 data-[open]:bg-gray-300 data-[focus]:outline-1 data-[focus]:outline-black">
                Options
                <ChevronDownIcon className="size-4 fill-black/60" />
            </MenuButton>
            <MenuItems
                transition
                anchor="bottom end"
                className="-translate-x-1/2 -translate-10 w-52 origin-top-right rounded-xl border border-black/5 bg-white p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                <MenuItem>
                    <button 
                        onClick={onEdit} // Handles edit
                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
                    >
                        <PencilIcon className="size-4 fill-black/30" />
                        Edit
                    </button>
                </MenuItem>
                <MenuItem>
                    <button 
                        onClick={onDuplicate} // Handles duplicate
                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
                    >
                        <Square2StackIcon className="size-4 fill-black/30" />
                        Duplicate
                    </button>
                </MenuItem>
                <div className="my-1 h-px bg-black/5" />
                <MenuItem>
                    <button
                        onClick={onDelete} // Handles delete
                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-red-500 data-[focus]:bg-red-100"
                    >
                        <TrashIcon className="size-4 fill-red-500" />
                        Delete
                    </button>
                </MenuItem>
            </MenuItems>
        </Menu>
    );
}
