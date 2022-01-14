import React, {useEffect, useState} from 'react';
import Cors from '../components/navbar/Cors';
import List from "../components/list/List";
import {PokeApi} from "../service/PokeApi";
import Filtre from "../components/filtre/Filtre";
import { useParams } from "react-router-dom";

export default function Home(props) {
    const pokeApi = new PokeApi();
    const [pokemonList, setPokemonList] = useState([]);

    const getPokemonList = async () => {
        const listePokemon = await pokeApi.getAllPokemon();
        setPokemonList(listePokemon);
    }

    // didMount sur la liste des pokemons
    useEffect(async () => {
        getPokemonList()
    }, [])

    const [filtre, setFiltre] = useState('');
    const {params} = useParams();

    const handleFiltreChange = async (search) => {
        setFiltre(search);
        if(search){
            const pokemonFilteredList = pokemonList.filter(pokemon =>
                pokemon.name.includes(search)
            );
            setPokemonList(pokemonFilteredList);
        }else{
            getPokemonList();
        }
    }

    return (
        <div>
            <Cors>
                <h1> Liste des pokemons </h1>
                <Filtre filtre={filtre} handleFiltreChange={handleFiltreChange}/>
                <div className="font-bold">
                    <List data={pokemonList}/>
                </div>
            </Cors>
        </div>
    )
}