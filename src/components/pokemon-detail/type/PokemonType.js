import React from 'react';
import {colors} from '../../../constante/color';

export default function PokemonType({type}) {
    return (
        <span className={"inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"} style={{backgroundColor: colors[type]}}>
            {type}
        </span>
    );
}