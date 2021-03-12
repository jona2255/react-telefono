import PropTypes from "prop-types";

const Teclado = (props) => {
  const { listaNumeros, agregarNumero, llamando } = props;
  return (
    listaNumeros.map(numero => {
      return (<li key={numero}><button name={numero} onClick={agregarNumero} disabled={llamando}>{numero}</button></li>);
    })
  );
};

Teclado.propTypes = {
  listaNumeros: PropTypes.array.isRequired,
  agregarNumero: PropTypes.func.isRequired,
  llamando: PropTypes.bool.isRequired
};

export default Teclado;
