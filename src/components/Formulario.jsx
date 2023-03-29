import { useState, useEffect } from 'react';

import {
  encabezadoSeccion,
  subTituloSec,
  formStyles,
  labelForm,
  inputForm,
  inputButton,
  errorFormulario,
} from './estilos';

const Formulario = () => {
  // Gestión de estados del formulario
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  // Funciones de eventos
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validaciones
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay algun elemento vacio');
      setError(true);
    } else {
      console.log('Todos llenos');
      setError(false);
    }
    // Reseteo de campos
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className={encabezadoSeccion}>Seguimiento Pacientes</h2>
      <p className="text-lg text-center">
        Añade y Administra {''}
        <span className={subTituloSec}>Mascotas</span>
      </p>

      {/*Formulario introduccion datos*/}
      <form className={formStyles} onSubmit={handleSubmit}>
        {/* Muestra en caso de error en el formulario */}
        {error && (
          <div className={errorFormulario}>
            <p>Todos los campos son obligatorios</p>
          </div>
        )}
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
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/*Fecha de Alta*/}
        <div className="mb-5">
          <label htmlFor="alta" className={labelForm}>
            Fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            className={inputForm}
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
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
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        {/* Boton de submit */}
        <input type="submit" value="Agregar Paciente" className={inputButton} />
      </form>
    </div>
  );
};
export default Formulario;
