import './App.css';
import Desafios from "./Desafios/Desafios"
import NumeroAleatorio from "./NumerosAleatorios/NumerosAleatorios"
function App() {
  return (
    <section className="app">
      <Desafios title="Números Aleatórios">
        <NumeroAleatorio max={60} min={30}/>
      </Desafios>
    </section>
  );
}

export default App;
