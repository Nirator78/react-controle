import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavVertical () {

    const types = [
        'normal',
        'poison',
        'psychic',
        'grass',
        'ground',
        'ice',
        'fire',
        'rock',
        'dragon',
        'water',
        'bug',
        'dark',
        'fighting',
        'ghost',
        'steel',
        'flying',
        'electric',
        'fairy'
    ];

    return (
        <div className="flex px-4 py-2 rounded-md text-left">
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
                    About
                </NavLink>
            </nav>
        </div>
    )
}