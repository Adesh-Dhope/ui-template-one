import React, { useState } from 'react'
import {LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    const [showLogout, setShowLogout] = useState(false);

    const onCancel = ()=>{
        setShowLogout(false)
    }
    const onLogout = ()=>{
navigate('/')
    }
  return (
    <div>
    <div className='hover:bg-[#ff7720] px-2'>
        <div onClick={() => setShowLogout(true)}><LogOut className='text-white cursor-pointer '/></div>
    </div>
{showLogout && (
<div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-11/12 max-w-md">

        {/* User Info */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={"https://i.pravatar.cc/100"}
            alt="User"
            className="w-16 h-16 rounded-full object-cover border border-orange-300"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{"John Doe"}</h3>
            <p className="text-sm text-gray-500">{  "Administrator"}</p>
          </div>
        </div>

        {/* Logout Text */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">Confirm Logout</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to log out of your account?
        </p>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white rounded-lg cursor-pointer text-gray-700 border border-gray-300  transition"
          >
            Cancel
          </button>
          <button
            onClick={onLogout}
            className="px-4 py-2 cursor-pointer rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
)}

        
    </div>
  )
}

export default Logout