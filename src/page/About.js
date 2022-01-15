import React from 'react';
import { Loader } from '../components/loader/Loader';
import Cors from '../components/navbar/Cors';

export default function About (props) {
    return (
        <div>
            <Cors>
                <div className="font-bold">
                    About
                    <br></br>
                    Attention ça tourne mais ça charge rien :)
                    <Loader />
                </div>
            </Cors>
        </div>
    )
}