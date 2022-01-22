import React, { useState } from "react";
import { useForm } from "react-hook-form";

import FormError from '../form/formError/FormError';

import Lottie from 'react-lottie-player'

import sendValidateLottieJson from '../../lottie/send-validate.json'

import{ init, send } from '@emailjs/browser';
init("user_vQH5bqcZleTIY2sE8Qv2n");

export default function Form ({setShowModal}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ validate, setValidate ] = useState(false);
    
    const onSubmit = data => {
        // Si formulaire est valider on afficher le lottie d'envoie de mail
        setValidate(true);
        // Pendant 3.5 sec
        setTimeout(
            () => {
                setShowModal(false)
            },
            3500
        )

        send('service_z7az12a', 'template_2wk24kq', data, 'user_vQH5bqcZleTIY2sE8Qv2n')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            {
                validate ? 
                (
                    <div className="grid place-items-center">
                        <Lottie
                            loop
                            animationData={sendValidateLottieJson}
                            play
                            style={{ width: 300, height: 300 }}
                        />
                    </div>
                )
                :
                (
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">
                                Destinataire
                            </label>
                            <input 
                                name="email"
                                className="form-control w-full block shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" 
                                placeholder="Email"
                                defaultValue='c.duval@ecole-ipssi.net'
                                {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Adresse mail non valide" } })} 
                            />
                            {
                                errors.email?.type === 'required' && 
                                <FormError text="L'email est un champ obligatoire"/>
                            }
                            {
                                errors.email?.type === 'pattern' && 
                                <FormError text="L'email n'est pas valide"/>
                            }
                            <br></br>

                            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="sujet">
                                Sujet
                            </label>
                            <input 
                                name="sujet"
                                className="form-control w-full block shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" 
                                placeholder="Sujet"
                                {...register("sujet", { required: true, maxLength: 20 })} 
                            />
                            {
                                errors.sujet?.type === 'required' && 
                                <FormError text="Le sujet est un champ obligatoire"/>
                            }
                            {
                                errors.sujet?.type === 'maxLength' && 
                                <FormError text="Le sujet ne doit pas dépasser les 20 caractères"/>
                            }
                            <br></br>

                            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="corps">
                                Corps du mail
                            </label>
                            <textarea 
                                name="corps"
                                className="form-control w-full block py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0" 
                                placeholder="Corps de l'email à envoyer. Exemple:(Bien joué 😀)" 
                                {...register("corps", { required: true, maxLength: 150 })} 
                            />
                            {
                                errors.corps?.type === 'required' && 
                                <FormError text="Le corps du mail est un champs obligatoire"/>
                            }
                            {
                                errors.corps?.type === 'maxLength' && 
                                <FormError text="Le corps du mail ne doit pas dépasser les 150 caractères"/>
                            }

                            <br></br>
                            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" />
                        </form>
                    </>
                )
            }
        </div>
    );
}