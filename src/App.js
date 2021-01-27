import './App.css';
import Desafios from "./Desafios/Desafios"
import NumeroAleatorio from "./NuAle/NumerosAleatorios"
import Lista from "./Lista/Lista"
function App() {
  return (
    <section className="app">
      <Desafios title="Números Aleatórios">
        <NumeroAleatorio max={60} min={30}/>
      </Desafios>
      <Desafios title="Listando Array de objetos">
        <Lista/>
      </Desafios>
    </section>
  );
}

export default App;
