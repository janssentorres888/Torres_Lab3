
# RUSEANDER Store – Product Catalog

## Description

RUSEANDER Store is a mini product catalog application
built using React and Vite.

This project demonstrates React Props and Component
Communication.

## Features

- Reusable ProductCard component
- Passing data using props
- Props destructuring and default values
- Conditional rendering and styling
- In Stock and Out of Stock status
- Disabled Add to Cart button for unavailable products
- Add to Cart callback function
- Cart message using useState
- Rendering reusable components using map()
- Children props for New and Sale badges
- Responsive product grid
- Accessible buttons and product cards

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

   npm install

4. Run the development server:

   npm run dev

## Guide Questions

### 1. What is the difference between props and state?

Props pass data from a parent component to a child
component. State stores and manages changing data
inside a component.

### 2. Why can a child component not modify the props it receives?

Props are read-only, so a child component cannot
directly modify the values received from its parent.

### 3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?

The parent passes a function to the child through props.
The child calls that function and sends the product
title back to the parent.

### 4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?

The key prop helps React identify each item in a list.
Missing or duplicated keys can make it harder for React
to track items and update the correct elements.

### 5. What does the children prop allow you to do that a normal prop does not?

The children prop allows a component to receive content
placed between its opening and closing tags. This makes
components more flexible and reusable.

## Author

DCIT26 – Application Development and Emerging Technologies

Laboratory Exercise 3
