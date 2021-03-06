import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CheckoutForm from './components/Checkout Form';
import Layout from "./components/Layout";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />}/>
        </Routes>
        </Layout>
      </BrowserRouter>      
    </div>
  );
}

export default App;
