import React from 'react';
import NavVertical from './NavVertical';
import Header from "./Header";

export default function Cors ({children}) {
    return (
        <>
            <div className="relative min-h-screen md:flex">
                <div className='px-8'>
                    <Header/>
                    <NavVertical/>
                </div>
                <div className="flex-1 bg-gray-50">
                    {children}              
                </div>
                
            </div>
        </>
    )
}