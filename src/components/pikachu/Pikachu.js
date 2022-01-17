import React from 'react';

import Lottie from 'react-lottie-player'

import pikachuLottieJson from '../../lottie/pikachu.json'

export default function Pikachu ({width, height}) {
    return (
        <Lottie
            loop
            animationData={pikachuLottieJson}
            play
            speed={0.7}
            style={{ width, height }}
        />
    );
}