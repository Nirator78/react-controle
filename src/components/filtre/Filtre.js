import React from 'react';

export default function Filtre ({filtre, handleFiltreChange}) {
    return (
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Filtre
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" value={filtre} onChange={(e) => {handleFiltreChange(e.target.value)}}>
            </input>
        </div>
    );
}