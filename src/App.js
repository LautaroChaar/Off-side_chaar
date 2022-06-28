import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from "react-router-dom";



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
          </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
