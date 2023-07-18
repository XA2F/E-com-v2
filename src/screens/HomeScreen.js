import React, { useEffect, useReducer } from 'react'; // Importing React, useEffect, and useReducer hooks from the react library
import axios from 'axios'; // Importing the axios library for making HTTP requests
import logger from 'use-reducer-logger'; // Importing the logger function from the use-reducer-logger library
import Row from 'react-bootstrap/Row'; // Importing the Row component from the react-bootstrap library
import Col from 'react-bootstrap/Col'; // Importing the Col component from the react-bootstrap library
import Product from '../components/Product'; // Importing the Product component from a local file
// import { Helmet } from 'react-helmet-async'; // Importing the Helmet component from the react-helmet-async library
import Slideshow from '../components/Slideshow'; // Importing the Slideshow component from a local file
import LoadingBox from '../components/LoadingBox'; // Importing the LoadingBox component from a local file
import MessageBox from '../components/MessageBox'; // Importing the MessageBox component from a local file
import ContactForm from '../components/ContactForm'; // Importing the ContactForm component from a local file
import Footer from '../components/Footer'; // Importing the Footer component from a local file

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }; // Update the state to indicate that a fetch request is in progress
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }; // Update the state with the fetched products and mark the loading as complete
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }; // Update the state with the error message and mark the loading as complete
    case 'FILTER_CATEGORY':
      return { ...state, filteredCategory: action.payload }; // Update the state with the filtered category
    case 'FILTER_PRICE':
      return { ...state, filteredPrice: action.payload }; // Update the state with the filtered price
    default:
      return state; // Return the current state if the action type is not recognized
  }
};

const HomeScreen = () => {
  const [
    { loading, error, products, filteredCategory, filteredPrice },
    dispatch,
  ] = useReducer(logger(reducer), {
    // Use the useReducer hook to manage state using the reducer function with logger middleware, initialize the state with default values
    products: [],
    loading: true,
    error: '',
    filteredCategory: '',
    filteredPrice: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' }); // Dispatch the FETCH_REQUEST action to indicate a fetch request is starting
      try {
        const result = await axios.get('/api/products'); // Make an API request to fetch the products
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data }); // Dispatch the FETCH_SUCCESS action with the fetched products
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message }); // Dispatch the FETCH_FAIL action with the error message if the request fails
      }
    };
    fetchData();
  }, []);

  const filterCategoryHandler = (category) => {
    dispatch({ type: 'FILTER_CATEGORY', payload: category }); // Dispatch the FILTER_CATEGORY action with the selected category to update the filtered category
  };

  const filterPriceHandler = (price) => {
    dispatch({ type: 'FILTER_PRICE', payload: price }); // Dispatch the FILTER_PRICE action with the selected price to update the filtered price
  };

  const filteredProducts = products.filter((product) => {
    if (filteredCategory && product.category !== filteredCategory) {
      return false; // Filter out products that don't match the filtered category
    }
    if (filteredPrice && product.price > filteredPrice) {
      return false; // Filter out products that have a higher price than the filtered price
    }
    return true; // Include all other products
  });

  return (
    <div>
      <Slideshow />
      <h1>Featured Products</h1>
      <div className="filters">
        <div className="filter-item">
          <label>Category:</label>
          <select
            value={filteredCategory}
            onChange={(e) => filterCategoryHandler(e.target.value)}
          >
            <option value="">All</option>
            <option value="Shirts">Shirts</option>
            category
            <option value="Shorts">Shorts</option>
            category
            <option value="Pants">Pants</option>
            category
          </select>
        </div>
        <div className="filter-item">
          <label>Price:</label>
          <select
            value={filteredPrice}
            onChange={(e) => filterPriceHandler(Number(e.target.value))}
          >
            <option value="">All</option>
            <option value="50">Below $50</option>
            <option value="100">Below $100</option>
            <option value="200">Below $200</option>
            <option value="300">Below $300</option>
          </select>
        </div>
      </div>
      <div className="products">
        {loading ? (
          <LoadingBox /> // Display the LoadingBox component if the data is still loading
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox> // Display the error message if an error occurs
        ) : filteredProducts.length === 0 ? (
          <MessageBox>No products found.</MessageBox> // Display a message if no products match the filters
        ) : (
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomeScreen;
//this is a comment
