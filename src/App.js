import './App.css';
import Navbar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <h1>Siempre un paso adelante!</h1>
      <ItemListContainer type= "Pelota" title= "Qatar 2022" image= "pelotaQatar2022" price="$15.000"/>
    </div>
  );
}

export default App;
