import PropTypes from "prop-types";

const Botones = (props) => {
  const { llamando, numeroTelefono, llamar, colgar } = props;
  return (
    !llamando ?
      <a href="llamar" className={`llamar${numeroTelefono.length === 9 ? " activo" : ""}`} onClick={llamar}>Llamar</a>
      : <a href="colgar" className="colgar activo" onClick={colgar}>Colgar</a>
  );
};

Botones.propTypes = {
  llamando: PropTypes.bool,
  numeroTelefono: PropTypes.string,
  llamar: PropTypes.func,
  colgar: PropTypes.func
};

export default Botones;
