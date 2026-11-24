# RUSEANDER Store - Product Catalog

## Description

RUSEANDER Store is a mini product catalog application built using React and Vite.

This project demonstrates React components, props, state management, live search, filtering, sorting, and useEffect.

## Features

### Laboratory Exercise 3 - React Props and Component Communication

- Reusable ProductCard component
- Passing data using props
- Props destructuring and default values
- Conditional rendering and styling
- In Stock and Out of Stock status
- Disabled Add to Cart button for unavailable products
- Add to Cart callback function
- Cart message using useState
- Rendering components using map()
- Children props for New and Sale badges
- Responsive product grid
- Accessible buttons and product cards

### Laboratory Exercise 4 - React useState and useEffect

- Search products by title
- Filter products by category
- Sort products by price
- Debounced search using useEffect
- 300ms search delay
- Cleanup function using clearTimeout
- Dynamic browser tab title
- Display filtered product count
- Empty state when no products match
- Clear Filters button
- Responsive search and filter layout

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- Git and GitHub

## Installation

1. Clone the repository.
2. Open the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## Laboratory Exercise 3 - Guide Questions

### 1. What is the difference between props and state?

Props pass data to child components, while state stores changing data in a component.

### 2. Why can a child component not modify the props it receives?

Because props are read-only and cannot be changed directly by the child component.

### 3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?

The parent passes a function to the child, and the child calls it to send data back.

### 4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?

The key helps React identify each item. Missing or duplicated keys can cause rendering problems.

### 5. What does the children prop allow you to do that a normal prop does not?

It allows us to place content inside a component's opening and closing tags.

## Laboratory Exercise 4 - Guide Questions

### 1. Why do we use separate states for searchText and debouncedSearch?

searchText updates while typing, while debouncedSearch updates after 300 milliseconds.

### 2. What would happen if we did not use the cleanup function in the debounce effect?

Old timers would keep running and cause unnecessary updates.

### 3. What is the purpose of the dependency array in useEffect? What happens if it is empty or omitted?

It controls when useEffect runs. An empty array runs once, while no array runs after every render.

### 4. Why should we avoid sorting the original products array directly?

To avoid changing the original product list. We use slice() to make a copy before sorting.

### 5. Should we store the filtered product list in state or calculate it during rendering? Why?

We should calculate it during rendering because it automatically updates when the filters change.

## Author

DCIT26 - Application Development and Emerging Technologies

Laboratory Exercises 3 and 4