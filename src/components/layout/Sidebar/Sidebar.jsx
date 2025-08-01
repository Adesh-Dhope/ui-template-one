// Sidebar.jsx
import React, { useState } from "react";
import {
  Menu,
  X,
  UserPlus,
  FolderOpen,
  ChevronUp,
  ChevronDown,
  UserCog,
} from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Add Teacher", icon: <UserPlus size={20} />, link: "/add-teacher" },
  { name: "Add Student", icon: <FolderOpen size={20} />, link: "/add-student" },
  { name: "Add Subject", icon: <FolderOpen size={20} />, link: "/add-subject" },
  {
    name: "Settings",
    icon: <UserCog size={20} />,
    children: [
      { name: "Add Details", link: "/add-details" },
      { name: "Upload Files", link: "/upload-files" },
    ],
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <>
      <div className=" md:hidden flex justify-between items-center  bg-orange-500  p-2">
        <h1 className="!text-lg font-bold text-white">Student Management</h1>
        <button 
        className="bg-transparent"
        onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-4 bg-orange-500 text-white font-bold text-base md:text-xl">
          Student Management
        </div>

        <ul className="p-4 space-y-4 flex flex-col items-start">
          {menuItems.map((item, index) => (
            <div key={index} className="w-full">
              {/* If item has submenu */}
              {item.children ? (
                <>
                  <div
                    onClick={() =>
                      setOpenMenu(openMenu === index ? null : index)
                    }
                    className="flex justify-between items-center px-2 py-2 rounded-lg hover:bg-blue-100 cursor-pointer w-full"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-gray-800 text-sm">{item.name}</span>
                    </div>
                    <div>
                      {openMenu === index ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </div>
                  </div>

                  {/* Show submenu if open */}
                  {openMenu === index && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            to={child.link}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-gray-700 hover:bg-blue-100 p-2 rounded-md"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                // Regular menu item
                <Link
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-blue-100 cursor-pointer w-full"
                >
                  {item.icon}
                  <span className="text-gray-800 text-sm">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.3)]  z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
