import { useState } from "react";

function App() {
  const [llamando, setLlamando] = useState(false);
  const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
  /* La siguiente lista es para probar que el botón de llamar se activa cuando tiene 9 números */
  const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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
            <li><button disabled={deshabilitarBoton}>1</button></li>
            <li><button disabled={deshabilitarBoton}>2</button></li>
            <li><button disabled={deshabilitarBoton}>3</button></li>
            <li><button disabled={deshabilitarBoton}>4</button></li>
            <li><button disabled={deshabilitarBoton}>5</button></li>
            <li><button disabled={deshabilitarBoton}>6</button></li>
            <li><button disabled={deshabilitarBoton}>7</button></li>
            <li><button disabled={deshabilitarBoton}>8</button></li>
            <li><button disabled={deshabilitarBoton}>9</button></li>
            <li><button disabled={deshabilitarBoton}>0</button></li>
            <li><button disabled={deshabilitarBoton} className="big">borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">{lista}</span>
          {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> 
          <!-- el número de teléfono tiene 9 cifras -->*/}
          <a href="#" className={`llamar${!llamando && lista.length === 9 ? " activo" : ""}`} onClick={llamar}>Llamar</a>
          {/* <!-- Sólo se tiene que ver un botón u otro --> */}
          <a href="#" className={`colgar${llamando ? " activo" : ""}`} onClick={colgar}>Colgar</a>
        </div>
      </main>
    </div>
  );
}

export default App;
