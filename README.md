File Organization
index.html: The root HTML file where the React application is mounted.
src/components/Card.jsx: A reusable wrapper component that provides the styled blue background.
src/components/Product.jsx: Displays individual product details.
src/components/ProductList.jsx: Manages and renders the list of product items.
src/App.jsx: The main parent component containing the application logic.
src/main.jsx: The entry point that mounts the application to the DOM.

Challenges

Syntax Error: Standard CSS properties like background-color caused errors in JSX, so I converted them to camelCase (backgroundColor).

Recursion Error: I accidentally used the <Product> tag inside the component itself. I fixed it by replacing it with standard HTML tags like <p>.
