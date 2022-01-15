import React from 'react';
import { Link } from "react-router-dom";

export default function Item({data}) {
    const {name, image} = data;

    return (
        <li className="flex">
            {name}
            <img src={image} alt="pokemon image" />
            <Link to={`/pokemon/${name}`}>Voir {name}</Link>
        </li>
    );
}