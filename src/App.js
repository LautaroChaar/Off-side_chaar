import './App.css';
import Navbar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <ItemListContainer greeting="Bienvenido a Off-side, siempre un paso adelante!" type= "Pelota" title= "Qatar 2022" image= "pelotaQatar2022" price="$15.000" stock={10} initial={0} />
    </div>
  );
}

export default App;
