import React from 'react';
import Cors from '../components/navbar/Cors';
import Modal from '../components/modal/Modal';
import Title from '../components/title/Title';

export default function About (props) {
    return (
        <div>
            <Cors>
                <div className="font-bold">
                    <Title title="A propos" />
                    <br></br>
                    <Modal />
                </div>
            </Cors>
        </div>
    )
}