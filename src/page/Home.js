import React, {useEffect, useState} from 'react';
import Cors from '../components/navbar/Cors';
import List from "../components/list/List";
import {PokeApi} from "../service/PokeApi";
import Filtre from "../components/filtre/Filtre";
import {useLocation} from "react-router-dom";
import Title from '../components/title/Title';
import { LoaderLottie } from '../components/loaderLottie/LoaderLottie';

export default function Home(props) {
    const pokeApi = new PokeApi();
    const [pokemonList, setPokemonList] = useState([]);
    const [filtre, setFiltre] = useState('');
    const [ loading, setLoading ] = useState(false);

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
    useEffect(() => {
        // Loader qui apparait pendant 1 sec
        setTimeout(
            () => {
                getPokemonList();
                let filtreUrl = new URLSearchParams(search).get('search');
                if (filtreUrl) {
                    handleFiltreChange(filtreUrl);
                }
                setLoading(true);
            },
            1500
        );        
    }, [])

    return (
        <div>
            <Cors>
                <Title title="Liste des Pokémons" />
                <Filtre filtre={filtre} handleFiltreChange={handleFiltreChange}/>
                <div className="font-bold">
                    {
                        loading ? 
                        (
                            <List data={pokemonList} />
                        )
                        :
                        (
                            <LoaderLottie />
                        )
                    }
                </div>
            </Cors>
        </div>
    )
}