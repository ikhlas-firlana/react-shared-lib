import './App.css';
import Product from './components/Product';
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Product />
          <Cart />
        </div>
      </header>
    </div>
  );
}

export default App;
