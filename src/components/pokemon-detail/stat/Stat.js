import React from 'react';

export default function Stat({statistique}) {
    const { base_stat, stat } = statistique;
    return (
        <li>
            {stat.name} : {base_stat}
        </li>
    );
}