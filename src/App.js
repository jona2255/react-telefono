import { useState } from "react";
import Botones from "./components/Botones";
import Marcador from "./components/Marcador";
import Mensaje from "./components/Mensaje";
import Teclado from "./components/Teclado";

function App() {
  const [llamando, setLlamando] = useState(false);

  const [numeroTelefono, setnumeroTelefono] = useState("");

  const [colgadoAutomatico, setColgadoAutomatico] = useState(null);

  const agregarNumero = e => {
    e.preventDefault();
    if (numeroTelefono.length < 9) {
      setnumeroTelefono(numeroTelefono + e.target.name);
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
    if (numeroTelefono.length === 9) {
      setLlamando(true);
      setColgadoAutomatico(setTimeout(() => {
        setLlamando(false);
        setnumeroTelefono("");
      }, 5000)
      );
    }
  };
  const colgar = (e) => {
    e.preventDefault();
    setLlamando(false);
    setnumeroTelefono("");
    clearTimeout(colgadoAutomatico);
  };
  return (
    <div className="contenedor">
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" -->  */}
      <Mensaje llamando={llamando} />
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            <Teclado
              listaNumeros={listaNumeros}
              agregarNumero={agregarNumero}
              llamando={llamando}
            />
            <li><button name="borrar" onClick={borrarNumero} disabled={llamando} className="big">borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <Marcador numeroTelefono={numeroTelefono} />
          <Botones
            llamando={llamando}
            numeroTelefono={numeroTelefono}
            llamar={llamar}
            colgar={colgar}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
