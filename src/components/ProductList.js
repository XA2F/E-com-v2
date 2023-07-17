import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('Shorts/api/products/');
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategoryFilter(selectedCategory);
  };

  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;
    setPriceFilter(selectedPrice);
  };

  const filterProducts = (product) => {
    if (categoryFilter && product.category !== categoryFilter) {
      return false;
    }
    if (priceFilter && product.price > parseInt(priceFilter)) {
      return false;
    }
    return true;
  };

  const filteredProducts = products.filter(filterProducts);

  return (
    <div>
      <div>
        <label htmlFor="category">Filter by Category:</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>
      </div>
      <div>
        <label htmlFor="price">Filter by Price:</label>
        <select id="price" onChange={handlePriceChange}>
          <option value="">All</option>
          <option value="100">Below $100</option>
          <option value="500">Below $500</option>
          <option value="1000">Below $1000</option>
        </select>
      </div>
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
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
