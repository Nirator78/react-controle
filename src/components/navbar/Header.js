import React from 'react';

import Lottie from 'react-lottie-player'

import pokemonLottieJson from '../../lottie/pikachu'

export default function Header () {
    return (
        <div className="flex">
            <Lottie
                loop
                animationData={pokemonLottieJson}
                play
                style={{ width: 40, height: 40 }}
            />
            <h2 className='text-2xl font-normal leading-normal mt-0 mb-2 text-indigo-800'>
                PokeClémentDex
            </h2>
        </div>        
    )
}