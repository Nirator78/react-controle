import React, { useState } from 'react';
import Pikachu from '../pikachu/Pikachu';

export default function Title ({title, textColor="text-indigo-800"}) {
    return (
        <div className="flex justify-center items-center text-center mx-4 space-y-2">
            <Pikachu width= {100} height= {100}/>
            <h1 className = {`${textColor} text-5xl font-bold`}> {title} </h1>
            <Pikachu width= {100} height= {100}/>
        </div>
    );
}