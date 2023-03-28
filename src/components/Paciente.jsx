import { cajaItemLista, itemLista, spanItem } from './estilos';

const Paciente = () => {
  return (
    <div className={cajaItemLista}>
      <p className={itemLista}>
        Nombre: {''}
        <span className={spanItem}>Hook</span>
      </p>
      <p className={itemLista}>
        Propietario: {''}
        <span className={spanItem}>David</span>
      </p>
      <p className={itemLista}>
        Email: {''}
        <span className={spanItem}>david@email.com</span>
      </p>
      <p className={itemLista}>
        Fecha Alta: {''}
        <span className={spanItem}>Fecha</span>
      </p>
      <p className={itemLista}>
        Síntomas: {''}
        <span className={spanItem}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          eligendi id temporibus sit amet cum nulla optio ipsam numquam
          voluptas, quas, nobis error dolor voluptatem sint porro totam vel
          quos.{' '}
        </span>
      </p>
    </div>
  );
};
export default Paciente;
