import PropTypes from "prop-types";
import BotonLlamar from "./BotonLlamar";
import BotonColgar from "./BotonColgar";


const Botones = (props) => {
  const { llamando, numeroTelefono, llamar, colgar } = props;
  return (
    !llamando ?
      <BotonLlamar
        numeroTelefono={numeroTelefono}
        llamar={llamar}
      /> :
      <BotonColgar
        colgar={colgar}
      />
  );
};

Botones.propTypes = {
  llamando: PropTypes.bool.isRequired,
  numeroTelefono: PropTypes.string.isRequired,
  llamar: PropTypes.func.isRequired,
  colgar: PropTypes.func.isRequired
};

export default Botones;
