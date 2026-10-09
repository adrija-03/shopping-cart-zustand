import './App.css'
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [showCart, setShowCart] = useState(false);

  function closeCart() {
    setShowCart(false)
  }
  function openCart() {
    setShowCart(true)
  }

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
      <Navbar manageCart={openCart} />

      <main className="w-full py-6">
        <ProductList />
      </main>

      <Cart isOpen={showCart} onClose={closeCart} />
    </div>
  );
}

export default App
