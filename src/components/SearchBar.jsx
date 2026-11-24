
function SearchBar({
  searchText,
  onSearchChange,
  category,
  onCategoryChange,
  sortOrder,
  onSortChange,
  onClearFilters,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        aria-label="Search products"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <select
        aria-label="Filter by category"
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="School Supplies">School Supplies</option>
        <option value="Accessories">Accessories</option>
      </select>

      <select
        aria-label="Sort products by price"
        value={sortOrder}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="default">Default</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>

      <button
        type="button"
        aria-label="Clear all search and filter settings"
        onClick={onClearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
}

export default SearchBar;
