import React, {useEffect, useState} from 'react';
import Cors from '../components/navbar/Cors';
import List from "../components/list/List";
import {PokeApi} from "../service/PokeApi";
import Filtre from "../components/filtre/Filtre";
import {useLocation} from "react-router-dom";
import Title from '../components/title/Title';

export default function Home(props) {
    const pokeApi = new PokeApi();
    const [pokemonList, setPokemonList] = useState([]);
    const [filtre, setFiltre] = useState('');

    const getPokemonList = async () => {
        const listePokemon = await pokeApi.getAllPokemon();
        setPokemonList(listePokemon);
    }

    const handleFiltreChange = async (search) => {
        setFiltre(search);
        if (search) {
            const pokemonListeAFiltrer = await pokeApi.getAllPokemon();
            const pokemonFilteredList = pokemonListeAFiltrer.filter(pokemon =>
                pokemon.name.includes(search)
            );
            setPokemonList(pokemonFilteredList);
            window.history.replaceState({}, '', "?search=" + search);
        } else {
            window.location.replace('/');
        }
    }
    const {search} = useLocation();

    // didMount sur la liste des pokemons
    useEffect(async () => {
        await getPokemonList();
        let filtreUrl = new URLSearchParams(search).get('search');
        if (filtreUrl) {
            await handleFiltreChange(filtreUrl);
        }
    }, [])

    return (
        <div>
            <Cors>
                <Title title="Liste des Pokémons" />
                <Filtre filtre={filtre} handleFiltreChange={handleFiltreChange}/>
                <div className="font-bold">
                    <List data={pokemonList}/>
                </div>
            </Cors>
        </div>
    )
}