import React from 'react';

import Lottie from 'react-lottie-player'

import loaderLottie from '../../lottie/loading.json'

export const LoaderLottie = () => {
    return (
        <div className="grid place-items-center h-screen">
            <Lottie
                loop
                animationData={loaderLottie}
                play
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};