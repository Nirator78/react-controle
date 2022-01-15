import React, { useEffect, useState } from 'react';
import Cors from '../navbar/Cors';
import { useParams } from "react-router-dom";
import { PokeApi } from '../../service/PokeApi';
import Competence from './competence/Competence';
import Type from './type/Type';
import Stat from './stat/Stat';

export default function PokemonCard() {
    const { pokemon } = useParams();
    const pokeApi = new PokeApi();
    const [pokemonDetail, setPokemonDetail] = useState('');

    const getPokemon = async (pokemon) => {
        const pokemonSearch = await pokeApi.getPokemonByName(pokemon);
        setPokemonDetail(pokemonSearch);
    }

    // didMount sur le pokemon à afficher
    useEffect(async () => {
        await getPokemon(pokemon);
    }, [])
    
    return (
        <div>
            <Cors>
                <div className='flex items-center justify-center h-screen'>
                    <div className="max-w-xl rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={pokemonDetail?.sprites?.front_default} alt={pokemonDetail?.name}></img>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{pokemonDetail?.nameDisplay}</div>
                        </div>
                        <div className="px-6 pt-4">
                            <div className="font-bold text-l mb-2">Corpulance</div>
                            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded mr-5">
                                Poids: {pokemonDetail?.weight}
                            </span>
                            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">
                                Taille: {pokemonDetail?.height}
                            </span>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <div className="font-bold text-l mb-2">Compétence</div>
                            {
                                pokemonDetail?.abilities?.map((data, key) => {
                                        return (
                                            <Competence key={key} abilitie={data.ability.name}></Competence>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <div className="font-bold text-l mb-2">Type</div>
                            {
                                pokemonDetail?.types?.map((data, key) => {
                                        return (
                                            <Type key={key} type={data.type.name}></Type>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <div className="font-bold text-l mb-2">Statistiques</div>
                            <ul className='list-disc list-inside'>
                                {
                                    pokemonDetail?.stats?.map((data, key) => {
                                            return (
                                                <Stat key={key} statistique={data}></Stat>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </Cors>
        </div>
    );
}