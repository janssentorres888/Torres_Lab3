
# RUSEANDER Store – Product Catalog

## Description

CvSU Mini Store is a mini product catalog application
built using React and Vite.

This project demonstrates React Props and Component
Communication.

## Features

- Reusable ProductCard component
- Passing data using props
- Props destructuring and default values
- Conditional rendering and styling
- In Stock and Out of Stock status
- Add to Cart callback function
- Cart message using useState
- Reusable components using map()
- Children props for New and Sale badges
- Responsive product grid

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

Props are used to pass data from a parent component
to a child component. State is used to store and
manage data that can change inside a component.

### 2. Why can a child component not modify the props it receives?

Props are read-only. A child component cannot directly
change the values passed by its parent.

### 3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?

The parent passes a function to the child through props.
When the child calls that function, it sends the product
title back to the parent.

### 4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?

The key prop helps React identify each item in a list.
Without unique keys, React may have difficulty tracking
changes and updating the correct elements.

### 5. What does the children prop allow you to do that a normal prop does not?

The children prop allows components to receive and
display content placed between their opening and
closing tags. This makes components more flexible
and reusable.

## Author

DCIT26 – Application Development and Emerging Technologies

Laboratory Exercise 3
