import PropTypes from "prop-types";

const BotonLlamar = (props) => {
  const { numeroTelefono, llamar } = props;
  return (
    <a href="llamar" className={`llamar${numeroTelefono.length === 9 ? " activo" : ""}`} onClick={llamar}>Llamar</a>
  );
};

BotonLlamar.propTypes = {
  numeroTelefono: PropTypes.string.isRequired,
  llamar: PropTypes.func.isRequired,
};

export default BotonLlamar;
