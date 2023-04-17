import {useState, useEffect} from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Enviando Formulario');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg text-center mt-5 mb-5"> Añadir pacientes y {" "} <span className="text-indigo-600 font-bold">Administralos</span></p>
      <form className="bg-white shadow-md rounded-lg py-5 px-5 mb-5" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input 
            id="mascota" 
            value={nombre} 
            onChange={ (e) => setNombre(e.target.value) } 
            type="text" 
            placeholder="Nombre de la Mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input 
            id="propietario" 
            value={propietario} 
            onChange={ (e) => setPropietario(e.target.value) } 
            type="text" 
            placeholder="Nombre del Propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input id="email" value={email} onChange={ (e) => setEmail(e.target.value) } type="email" placeholder="Email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input id="Alta" value={fecha} onChange={ (e) => setFecha(e.target.value) } type="date" placeholder="Alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea id="Sintomas" value={sintomas} onChange={ (e) => setSintomas(e.target.value) } placeholder="Descripción de los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all" value="Agregar Paciente"/>
      </form>
    </div>
  )
}

export default Formulario