import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import List from '../components/list/List';
import Cors from '../components/navbar/Cors';
import Title from '../components/title/Title';
import { PokeApi } from '../service/PokeApi';

export default function Type (props) {
    const { type } = useParams();
    const pokeApi = new PokeApi();
    const [pokemonList, setPokemonList] = useState([]);

    const getPokemonList = async () => {
        const listePokemon = await pokeApi.getPokemonByType(type);
        setPokemonList(listePokemon);
    }
    
    // didMount sur la liste des pokemons
    useEffect(async () => {
        await getPokemonList();
    }, [type])


    return (
        <div>
        <Cors>
            <Title title={`Liste des pokemons de type : ${type}`} />
            <div className="font-bold">
                <List data={pokemonList}/>
            </div>
        </Cors>
    </div>
    )
}