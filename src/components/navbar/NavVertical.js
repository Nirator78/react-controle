import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavVertical () {
    return (
        <div className="flex px-4 py-2 rounded-md text-left">
            <nav>
                <NavLink to='/' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white' activeclassname='text-green-500 visited:text-purple-600 ...'>
                    Home
                </NavLink>
                <NavLink to='/about' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white' activeclassname='text-green-500 visited:text-purple-600 ...'>
                    About
                </NavLink>
            </nav>
        </div>
    )
}