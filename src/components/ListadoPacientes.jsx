import { Paciente } from './index';
import { encabezadoSeccion, subTituloSec } from './estilos';

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
      <h2 className={encabezadoSeccion}>Listado Pacientes</h2>
      <p className="text-lg text-center">
        Administra tus {''}
        <span className={subTituloSec}>Pacientes y Citas</span>
      </p>

      {/* Lista de Pacientes */}
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  );
};
export default ListadoPacientes;
