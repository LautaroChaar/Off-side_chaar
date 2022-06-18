import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {

  const onAdd = (initial) => {
		alert(`Agregaste ${initial} producto/s al carrito de compra.`)
	};

  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <ItemListContainer greeting="Bienvenido a Off-side, siempre un paso adelante!" onAdd={onAdd} />
    </div>
  );
}

export default App;
