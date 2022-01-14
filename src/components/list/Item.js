import React from 'react';
export default function Item({data}) {
    const {name, image} = data;

    return (
        <li className="flex">
            {name}
            <img src={image} alt="pokemon image" />
        </li>
    );
}