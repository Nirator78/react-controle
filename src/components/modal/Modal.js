import React from "react";
import Form from '../form/Form'

import Lottie from 'react-lottie-player'

import sendLottieJson from '../../lottie/send.json'

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        type="button"
        onClick={() => setShowModal(true)}
      >
          <div className="flex">
            <Lottie
                loop
                animationData={sendLottieJson}
                play
                style={{ width: 20, height: 20 }}
            />
            <span className="pl-2">Contact</span> 
        </div>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Fomulaire de contact
                  </h3>
                  <button
                    className="pl-5 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <Form/>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}