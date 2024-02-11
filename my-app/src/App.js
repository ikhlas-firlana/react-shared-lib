import './App.css';
import Product from './components/Product';
import Cart from "./components/Cart";
import { CartContext } from "./store/cart-context";
import {useState} from "react";

function App() {
  const [items, setItem] = useState([]);
  const ctx = {
    items,
    handleItem: (item) => {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        setItem([ ...items])
      } else {
        setItem([ ...items, item ])
      }
    },
  };

  return (
    <CartContext.Provider value={ctx}>
      <div className="App">
        <header className="App-header">
          <div>
            <Product />
            <Cart />
          </div>
        </header>
      </div>
    </CartContext.Provider>
  );
}

export default App;
