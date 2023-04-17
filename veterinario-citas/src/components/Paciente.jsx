import React from 'react'

const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl ">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{" "} <span className="font-normal normal-case">Troy</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{" "} <span className="font-normal normal-case">Marta</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email:{" "} <span className="font-normal normal-case">correo@correo.com</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Alta:{" "} <span className="font-normal normal-case">17/04/2023</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{" "} <span className="font-normal normal-case">Esta como una rosa</span></p>
    </div>
  )
}

export default Paciente
