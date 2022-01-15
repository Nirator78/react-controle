import React, { useState, useEffect } from 'react';
import Cors from '../components/navbar/Cors';
import { toJson } from '../utils/toJson';

export default function Favoris (props) {

    const [favoriList, setFavoriList] = useState([]);

    useEffect(() =>{
        // Récupération de la valeur favori dans le localstorage et on la converti en json traitable
        let favori = toJson(localStorage.getItem('favori'));
        
        // Si oui on le re coche
        if(favori.length){
            setFavoriList(favori);
        }
    }, []);

    return (
        <div>
            <Cors>
                <div>
                    <h2 className="font-bold">Vos Pokémon favoris</h2>
                    <br></br>
                    <ul>
                        {
                            favoriList.map((data, key) => {
                                return (
                                    <li key={key}>
                                        {data}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Cors>
        </div>
    )
}