import Products from "./components/Products";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <Products />
      </main>
    </div>
  );
};

export default App;
