import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';
import Form from './components/Form/Form';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar></Navbar>
        </header>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a Off-side, siempre un paso adelante!" />} />
            <Route path="/category/:category" element={<ItemListContainer greeting="Bienvenido a Off-side, siempre un paso adelante!" />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/form" element={<Form />}/>
          </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
