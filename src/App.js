import { useState } from "react";

function App() {
  const [llamando, setLlamando] = useState(false);
  const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);

  const [numeroTelefono, setnumeroTelefono] = useState("");

  const agregarNumero = e => {
    e.preventDefault();
    if (numeroTelefono.length < 9) {
      setnumeroTelefono(numeroTelefono + e.target.name);
    } else {
      setnumeroTelefono(numeroTelefono);
    }
  };

  const borrarNumero = e => {
    e.preventDefault();
    setnumeroTelefono(Math.floor(parseInt(numeroTelefono) / 10) + "");
  };

  /* La siguiente lista es para probar que el botón de llamar se activa cuando tiene 9 números */
  //const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const llamar = (e) => {
    e.preventDefault();
    setLlamando(true);
    setDeshabilitarBoton(true);
    colgadoAutomatico();
  };
  const colgar = (e) => {
    e.preventDefault();
    setLlamando(false);
    setDeshabilitarBoton(false);
  };
  const colgadoAutomatico = () => {
    setTimeout(() => {
      setLlamando(false);
      setDeshabilitarBoton(false);
    }, 5000);
  };
  return (
    <div className="contenedor">
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" -->  */}
      <span className="mensaje">Llamando...</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            <li><button name="1" onClick={agregarNumero} disabled={deshabilitarBoton}>1</button></li>
            <li><button name="2" onClick={agregarNumero} disabled={deshabilitarBoton}>2</button></li>
            <li><button name="3" onClick={agregarNumero} disabled={deshabilitarBoton}>3</button></li>
            <li><button name="4" onClick={agregarNumero} disabled={deshabilitarBoton}>4</button></li>
            <li><button name="5" onClick={agregarNumero} disabled={deshabilitarBoton}>5</button></li>
            <li><button name="6" onClick={agregarNumero} disabled={deshabilitarBoton}>6</button></li>
            <li><button name="7" onClick={agregarNumero} disabled={deshabilitarBoton}>7</button></li>
            <li><button name="8" onClick={agregarNumero} disabled={deshabilitarBoton}>8</button></li>
            <li><button name="9" onClick={agregarNumero} disabled={deshabilitarBoton}>9</button></li>
            <li><button name="0" onClick={agregarNumero} disabled={deshabilitarBoton}>0</button></li>
            <li><button name="borrar" onClick={borrarNumero} disabled={deshabilitarBoton} className="big">borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">{numeroTelefono}</span>
          {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
          <!-- el número de teléfono tiene 9 cifras -->*/}
          <a href="#" className={`llamar${!llamando && numeroTelefono.length === 9 ? " activo" : ""}`} onClick={llamar}>Llamar</a>
          {/* <!-- Sólo se tiene que ver un botón u otro --> */}
          <a href="#" className={`colgar${llamando ? " activo" : ""}`} onClick={colgar}>Colgar</a>
        </div>
      </main>
    </div>
  );
}

export default App;
