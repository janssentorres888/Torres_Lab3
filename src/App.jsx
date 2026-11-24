
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import products from "./data/products";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const handleAddToCart = (productTitle) => {
    setCartCount((previousCount) => previousCount + 1);
    setLastAdded(productTitle);
  };

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .filter((product) =>
      category === "All" || product.category === category
    )
    .slice()
    .sort((a, b) => {
      if (sortOrder === "low-to-high") {
        return a.price - b.price;
      }

      if (sortOrder === "high-to-low") {
        return b.price - a.price;
      }

      return 0;
    });

  // Update browser tab title
  useEffect(() => {
    document.title = `RUSEANDER Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

  // Clear all filters
  const handleClearFilters = () => {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
  };

  return (
    <div className="app-container">
      <header className="store-header">
        <h1>RUSEANDER Store</h1>
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

        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
          category={category}
          onCategoryChange={setCategory}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          onClearFilters={handleClearFilters}
        />

        <p className="results-count" aria-live="polite">
          Showing {filteredProducts.length} of {products.length} products
        </p>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                inStock={product.inStock}
                onAddToCart={handleAddToCart}
              >
                {product.id === 1 && (
                  <span className="new-badge">New</span>
                )}

                {product.id === 5 && (
                  <span className="sale-badge">Sale</span>
                )}
              </ProductCard>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No products found.</h3>
            <p>Try a different keyword or category.</p>
          </div>
        )}
      </main>

      <footer className="store-footer">
        <p>
          © 2026 RUSEANDER Store | DCIT26 Laboratory Exercise 4
        </p>
      </footer>
    </div>
  );
}

export default App;
