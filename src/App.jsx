import './App.css'
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {

  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-white">
      <Navbar />

      <main className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}

export default App
