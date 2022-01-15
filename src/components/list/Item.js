import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';
import { toJson } from '../../utils/toJson';

export default function Item({data}) {
    const {name, image, nameDisplay} = data;

    const [checked, setChecked] = useState(false);

    const handleChangeCheckbox = () => {
        // Récupération de la valeur favori dans le localstorage et on la converti en json traitable
        let favori = toJson(localStorage.getItem('favori'));

        if(!checked){
            // On ajout l'item dans le tableau favori
            if(favori){
                // ajout si la valeur existe déjà
                favori.push(name);
            }else{
                // si il n'y a jamais eu de favori
                favori = [name];
            }
            localStorage.setItem('favori', JSON.stringify(favori));
        }else{
            // On supprime l'item du tableau favori
            const index = favori.indexOf(name);
            if (index > -1) {
                favori.splice(index, 1);
            }
            localStorage.setItem('favori', JSON.stringify(favori));
        }

        setChecked(!checked);
    };

    useEffect(() =>{
        // Récupération de la valeur favori dans le localstorage et on la converti en json traitable
        let favori = toJson(localStorage.getItem('favori'));
        
        // On cherche si le pokemon est en favori
        const searchName = favori.filter(nameSearch => nameSearch === name);

        // Si oui on le re coche
        if(searchName.length){
            setChecked(true);
        }

    }, []);

    return (
        <div className="border-2 border-gray-400">
            <div className="flex items-center">
                <img className="w-30 h-30 rounded-full mr-4" src={image} alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">{nameDisplay}</p>
                    <p className="text-blue-600"><Link to={`/pokemon/${name}`}>Voir {nameDisplay}</Link></p>
                    <div className="flex items-center mr-4 mb-2">
                        <input
                            name={name}
                            type="checkbox"
                            checked={checked}
                            onChange={handleChangeCheckbox}
                        />
                        <label htmlFor={name} className="select-none"> Favori</label>
                    </div>                   
                </div>
            </div>
        </div>
    );
}