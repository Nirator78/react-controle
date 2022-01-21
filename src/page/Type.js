import React, { useState, useEffect } from 'react';
import List from '../components/list/List';
import Cors from '../components/navbar/Cors';
import Title from '../components/title/Title';
import { PokeApi } from '../service/PokeApi';
import {types} from '../constante/type';

export default function Type () {
    const [ typeChoose, setTypeChoose ] = useState('normal');
    const pokeApi = new PokeApi();
    const [ pokemonList, setPokemonList ] = useState([]);

    const getPokemonList = async () => {
        const listePokemon = await pokeApi.getPokemonByType(typeChoose);
        setPokemonList(listePokemon);
    }
    
    // didMount sur la liste des pokemons
    useEffect(() => {
        getPokemonList();
    }, [typeChoose])

    const handleChange=(e)=>{
        setTypeChoose( e.target.value);    
    }

    return (
        <div>
        <Cors>
            <Title title={`Liste des pokemons de type : ${typeChoose}`} />
            <form>
                {
                    types.map((type, key) => {
                        return (
                            <>
                                <label key={`${key}label`} className="inline-flex items-center">
                                    <input key={`${key}input`} type="radio" value={type} onChange={handleChange} name="type" className="form-radio" />
                                    <span key={`${key}span`} htmlFor={type} className="ml-2">{type}</span>
                                </label>
                            </>
                        )
                    })
                }
            </form>

            <div className="font-bold">
                <List data={pokemonList}/>
            </div>
        </Cors>
    </div>
    )
}