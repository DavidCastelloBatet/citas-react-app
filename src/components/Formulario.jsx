import {
  encabezadoSeccion,
  formStyles,
  labelForm,
  inputForm,
  inputButton,
} from './estilos';

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className={encabezadoSeccion}>Seguimiento Pacientes</h2>
      <p className="text-lg text-center">
        Añade y Administra {''}
        <span className="text-indigo-700 font-black">Mascotas</span>
      </p>
      <form className={formStyles}>
        {/*Nombre de la mascota*/}
        <div className="mb-5">
          <label htmlFor="mascota" className={labelForm}>
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className={inputForm}
          />
        </div>
        {/*Nombre del propietario*/}
        <div className="mb-5">
          <label htmlFor="propietario" className={labelForm}>
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className={inputForm}
          />
        </div>

        {/*Email del propietario*/}
        <div className="mb-5">
          <label htmlFor="email" className={labelForm}>
            Email de Contacto
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Contacto"
            className={inputForm}
          />
        </div>

        {/*Fecha de Alta*/}
        <div className="mb-5">
          <label htmlFor="alta" className={labelForm}>
            Fecha de Alta
          </label>
          <input id="alta" type="date" className={inputForm} />
        </div>

        {/*Síntomas*/}
        <div className="mb-5">
          <label htmlFor="sintomas" className={labelForm}>
            Síntomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los Síntomas"
            className={inputForm}
          />
        </div>

        {/* Boton de submit */}
        <input type="submit" value="Agregar Paciente" className={inputButton} />
      </form>
    </div>
  );
};
export default Formulario;
