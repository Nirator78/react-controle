import React from 'react';
import { NavLink } from 'react-router-dom';

import {types} from '../../constante/type'

export default function NavVertical () {
    return (
        <div className="px-4 py-2 rounded-md text-left">
            <nav>
                <NavLink to='/' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white' activeclassname='text-green-500 visited:text-purple-600 ...'>
                    Home
                </NavLink>
                <div className='block py-2.5 px-4 rounded transition duration-200'> 
                    Type
                    <ul>
                        {
                            types.map((type, key) => {
                                return (
                                    <li key={key}>
                                        <NavLink to={`/type/${type}`} className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white' activeclassname='text-green-500 visited:text-purple-600 ...'>
                                            {type}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }                        
                    </ul>
                </div>
                <NavLink to='/favoris' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white' activeclassname='text-green-500 visited:text-purple-600 ...'>
                    Favoris
                </NavLink>
                <NavLink to='/about' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white' activeclassname='text-green-500 visited:text-purple-600 ...'>
                    A propos
                </NavLink>
            </nav>
        </div>
    )
}