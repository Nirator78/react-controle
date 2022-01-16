import React from 'react';
import { Loader } from '../components/loader/Loader';
import Cors from '../components/navbar/Cors';
import Modal from '../components/modal/Modal';

export default function About (props) {
    return (
        <div>
            <Cors>
                <div className="font-bold">
                    About
                    <br></br>
                    Attention ça tourne mais ça charge rien :)
                    <Loader />
                    <br></br>
                    <Modal />
                </div>
            </Cors>
        </div>
    )
}