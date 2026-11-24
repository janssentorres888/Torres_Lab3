
function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  return (
    <div className={`product-card ${inStock ? "in-stock" : "out-of-stock"}`}>

      <div className="product-badge">
        {children}
      </div>

      <h3>{title}</h3>

      <p className="product-category">{category}</p>

      <h2 className="product-price">
        ₱{price.toLocaleString("en-PH", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h2>

      {inStock ? (
        <p className="stock-status available">In Stock</p>
      ) : (
        <p className="stock-status unavailable">Out of Stock</p>
      )}

      <button
        className="add-to-cart-btn"
        onClick={() => onAddToCart(title)}
        disabled={!inStock}
      >
        {inStock ? "Add to Cart" : "Unavailable"}
      </button>

    </div>
  );
}

export default ProductCard;
