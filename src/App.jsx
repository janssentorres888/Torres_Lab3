
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  const handleAddToCart = (productTitle) => {
    setCartCount((previousCount) => previousCount + 1);
    setLastAdded(productTitle);
  };

  return (
    <div className="app-container">

      <header className="store-header">
        <h1>CvSU Mini Store</h1>
        <p>Your One-Stop Shop for Everyday Essentials</p>
      </header>

      <section className="cart-message">
        {cartCount === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <p>
            Items added to cart: <strong>{cartCount}</strong>
            {" "}(Last added: <strong>{lastAdded}</strong>)
          </p>
        )}
      </section>

      <main className="product-section">
        <h2>Our Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              onAddToCart={handleAddToCart}
            >
              {product.id === 1 && <span className="new-badge">New</span>}
              {product.id === 5 && <span className="sale-badge">Sale</span>}
            </ProductCard>
          ))}
        </div>
      </main>

      <footer className="store-footer">
        <p>© 2026 CvSU Mini Store | DCIT26 Laboratory Exercise 3</p>
      </footer>

    </div>
  );
}

export default App;
