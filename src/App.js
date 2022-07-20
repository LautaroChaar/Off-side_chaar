import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import CheckoutForm from './components/Checkout Form';


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
          <Route path="/checkout" element={<CheckoutForm />}/>
        </Routes>
        <footer>
          Footer
        </footer>
      </BrowserRouter>      
    </div>
  );
}

export default App;
