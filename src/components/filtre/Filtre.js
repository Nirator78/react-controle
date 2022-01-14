import React from 'react';

export default function Filtre ({filtre, handleFiltreChange}) {
    return (
        <div>
            <label>Filtre</label>
            <input type="text" value={filtre} onChange={(e) => {handleFiltreChange(e.target.value)}} />
        </div>
    );
}