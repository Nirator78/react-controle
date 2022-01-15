import React from 'react';
import { Link } from "react-router-dom";

export default function Item({data}) {
    const {name, image} = data;

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        console.log("Changement d'etat", name);
        setChecked(!checked);
    };

    return (
        <div className="border-2 border-gray-400">
            <div className="flex items-center">
                <img className="w-30 h-30 rounded-full mr-4" src={image} alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">{name}</p>
                    <p className="text-gray-600"><Link to={`/pokemon/${name}`}>Voir {name}</Link></p>
                    <div className="flex items-center mr-4 mb-2">
                        <input
                            name={name}
                            type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                        />
                        <label htmlFor={name} className="select-none"> Favori</label>
                    </div>                   
                </div>
            </div>
        </div>
    );
}