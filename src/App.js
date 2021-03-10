function App() {
  return (
    <div className="contenedor">
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" -->  */}
      <span className="mensaje">Llamando...</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            <li><button>1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>4</button></li>
            <li><button>5</button></li>
            <li><button>6</button></li>
            <li><button>7</button></li>
            <li><button>8</button></li>
            <li><button>9</button></li>
            <li><button>0</button></li>
            <li><button className="big">borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero"></span>
          {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> 
          <!-- el número de teléfono tiene 9 cifras -->*/}
          <a href="#" className="llamar">Llamar</a>
          {/* <!-- Sólo se tiene que ver un botón u otro --> */}
          <a href="#" className="colgar">Colgar</a>
        </div>
      </main>
    </div>
  );
}

export default App;
