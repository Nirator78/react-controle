import React from 'react';

import Lottie from 'react-lottie-player'

import loaderLottie from '../../lottie/loading.json'

export const LoaderLottie = () => {
    return (
        <div className="grid place-items-center">
            <Lottie
                loop
                animationData={loaderLottie}
                play
                style={{ width: '60%', height: '75%' }}
            />
        </div>
    );
};