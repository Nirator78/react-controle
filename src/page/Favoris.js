import React, { useState, useEffect } from 'react';
import Cors from '../components/navbar/Cors';
import { PokeApi } from '../service/PokeApi';
import { toJson } from '../utils/toJson';
import Item from '../components/list/Item';
import { capitalizeFirstLetter } from '../utils/stringConverter';
import Title from '../components/title/Title';

export default function Favoris (props) {
    const [favoriList, setFavoriList] = useState([]);

    useEffect(async () =>{
        // Récupération de la valeur favori dans le localstorage et on la converti en json traitable
        let favori = toJson(localStorage.getItem('favori')) || [];
        
        // Si il y a des favori on affiche la liste
        if(favori.length){
            const pokemonFavorite = await Promise.all(favori.map(async (data) => {
                const pokeApi = new PokeApi();
                const pokemon = await pokeApi.getPokemonByName(data);

                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    nameDisplay: capitalizeFirstLetter(pokemon.name),
                    image: pokemon.sprites.front_default
                }
            }));

            setFavoriList(pokemonFavorite);
        }
    }, []);

    return (
        <div>
            <Cors>
                <div className="font-bold">
                    <Title title="Vos Pokémon favoris" />
                    <br></br>
                    <ul>
                        {
                            favoriList.map((data, key) => {
                                return (
                                    <Item key={key} data={data}></Item>
                                )
                            })
                        }
                    </ul>
                </div>
            </Cors>
        </div>
    )
}