import PropTypes from "prop-types";

const Marcador = (props) => {
  const { numeroTelefono } = props;
  return (
    <span className="numero">{numeroTelefono}</span>
  );
};

Marcador.propTypes = {
  numeroTelefono: PropTypes.string.isRequired,
};

export default Marcador;
