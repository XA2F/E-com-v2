import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  // Our State variables for products, loading state, error state, category filter, and price filter
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);

  // here we will be trying to fetch products from the server
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/products/'); // we are going to be making a  GET request to the server API
      setProducts(response.data); // Set the products state with the received data
      setLoading(false); // Set loading state to false once the data is fetched
    } catch (err) {
      setError(err.message); // Set error state if there is an error in the request
      setLoading(false); // Set loading state to false
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Event handler for category filter change
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategoryFilter(selectedCategory); // Update the category filter state based on the selected value
  };

  // Event handler for price filter change
  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;
    setPriceFilter(selectedPrice); // Update the price filter state based on the selected value
  };

  // Function to filter products based on category and price filters
  const filterProducts = (product) => {
    if (categoryFilter && product.category !== categoryFilter) {
      return false; // If category filter is set and the product's category doesn't match, exclude the product
    }
    if (priceFilter && product.price > parseInt(priceFilter)) {
      return false; // If price filter is set and the product's price is higher, exclude the product
    }
    return true; // Include the product if it passes all filters
  };

  // Apply the filter function to the products array and get filtered products
  const filteredProducts = products.filter(filterProducts);

  return (
    <div>
      <div>
        {/* Label and select element for category filter */}
        <label htmlFor="category">Filter by Category:</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>
      </div>
      <div>
        {/* Label and select element for price filter */}
        <label htmlFor="price">Filter by Price:</label>
        <select id="price" onChange={handlePriceChange}>
          <option value="">All</option>
          <option value="100">Below $100</option>
          <option value="500">Below $500</option>
          <option value="1000">Below $1000</option>
        </select>
      </div>
      {/* Conditional rendering based on loading and error states */}
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {/* Iterate over filteredProducts and render a list item for each product */}
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.category} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
