import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {



  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <div>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg text-center mt-5 mb-5"> Administra tus {" "}<span className="text-indigo-600 font-bold" >Pacientes y Citas</span></p>
      
          { pacientes.map( paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
            />
          ))}
        </div>
      ): (
        <div>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg text-center mt-5 mb-5"> Tus nuevos pacientes {" "}<span className="text-indigo-600 font-bold" >aparecerán aquí</span></p>
        </div>
      )  
      }
      

      
    </div>
  )
}

export default ListadoPacientes