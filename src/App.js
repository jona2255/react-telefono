import { useState } from "react";

function App() {
  const [llamando, setLlamando] = useState(false);

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
    if (numeroTelefono.length === 1) {
      setnumeroTelefono("");
    } else if (numeroTelefono === "") {
      setnumeroTelefono("");
    }
    else {
      setnumeroTelefono(Math.floor(parseInt(numeroTelefono) / 10) + "");
    }
  };

  const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const llamar = (e) => {
    e.preventDefault();
    setLlamando(true);
    colgadoAutomatico();
  };
  const colgar = (e) => {
    e.preventDefault();
    setLlamando(false);
  };
  const colgadoAutomatico = () => {
    setTimeout(() => {
      setLlamando(false);
    }, 5000);
  };
  return (
    <div className="contenedor">
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" -->  */}
      <span className="mensaje">Llamando...</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            {
              listaNumeros.map(numero => {
                return (<li><button name={numero} onClick={agregarNumero} disabled={llamando}>{numero}</button></li>);
              })
            }
            <li><button name="borrar" onClick={borrarNumero} disabled={llamando} className="big">borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">{numeroTelefono}</span>
          {!llamando ?
            <a href="llamar" className={`llamar${!llamando && numeroTelefono.length === 9 ? " activo" : ""}`} onClick={llamar}>Llamar</a>
            : <a href="colgar" className={`colgar${llamando ? " activo" : ""}`} onClick={colgar}>Colgar</a>}
        </div>
      </main>
    </div>
  );
}

export default App;
