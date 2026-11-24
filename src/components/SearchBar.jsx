
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
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <select
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
        value={sortOrder}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="default">Default</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>

      <button onClick={onClearFilters}>
        Clear Filters
      </button>
    </div>
  );
}

export default SearchBar;
