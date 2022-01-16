import React from "react";
import { useForm } from "react-hook-form";

export default function Form () {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">
                    Destinataire
                </label>
                <input 
                    name="email"
                    className="form-control w-full block shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" 
                    placeholder="Email"
                    defaultValue='c.duval@ecole-ipssi.net'
                    {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" } })} 
                />
                {
                    errors.email?.type === 'required' && 
                    <span className="text-red-500 text-sm">L'email est un champ obligatoire</span>
                }
                {
                    errors.email?.type === 'pattern' && 
                    <span className="text-red-500 text-sm">L'email n'est pas valide</span>
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
                    <span className="text-red-500 text-sm">Le sujet est un champ obligatoire</span>
                }
                {
                    errors.sujet?.type === 'maxLength' && 
                    <span className="text-red-500 text-sm">Le sujet ne doit pas dépasser les 20 caractères</span>
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
                    <span className="text-red-500 text-sm">Le corps du mail est un champs obligatoire</span>
                }
                {
                    errors.corps?.type === 'maxLength' && 
                    <span className="text-red-500 text-sm">Le corps du mail ne doit pas dépasser les 150 caractères</span>
                }

                <br></br>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" />
            </form>
        </div>
    );
}