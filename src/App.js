import './App.css';
import Desafios from "./Desafios/Desafios"
import NumeroAleatorio from "./NuAle/NumerosAleatorios"
import Lista from "./Lista/Lista"
import Mega from "./Mega/Mega"
import ParImpar from "./UfParIm/ParImpar"

function App() {
  return (
    <section className="app">
      <Desafios title="UseEffect Par Impar ">
        <ParImpar/>
      </Desafios>
      <Desafios title="Mega ">
        <Mega></Mega>
      </Desafios>
      <Desafios title="Listando Array de objetos">
        <Lista/>
      </Desafios>
      <Desafios title="Números Aleatórios">
        <NumeroAleatorio max={60} min={30}/>
      </Desafios>
      

    </section>
  );
}

export default App;
