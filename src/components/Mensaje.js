import PropTypes from "prop-types";

const Mensaje = (props) => {
  const { llamando } = props;
  return (
    <span className={`mensaje ${llamando ? "" : " off"}`} >Llamando...</span>
  );
};

Mensaje.propTypes = {
  llamando: PropTypes.bool,
};

export default Mensaje;
