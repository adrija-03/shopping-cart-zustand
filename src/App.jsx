import './App.css'
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [showCart, setShowCart] = useState(false);

  console.log(showCart)

  // function handleCart() {
  //   setShowCart(prev => !prev)
  // }
  function openCart() {
    setShowCart(true)
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-white">
      <Navbar manageCart={openCart}/>

      <main className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ProductList />
        {showCart && <Cart />}
      </main>
    </div>
  );
}

export default App
