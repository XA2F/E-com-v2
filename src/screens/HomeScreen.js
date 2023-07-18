import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
// import { Helmet } from 'react-helmet-async';
import Slideshow from '../components/Slideshow';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'FILTER_CATEGORY':
      return { ...state, filteredCategory: action.payload };
    case 'FILTER_PRICE':
      return { ...state, filteredPrice: action.payload };
    default:
      return state;
  }
};

const HomeScreen = () => {
  const [
    { loading, error, products, filteredCategory, filteredPrice },
    dispatch,
  ] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
    filteredCategory: '',
    filteredPrice: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  const filterCategoryHandler = (category) => {
    dispatch({ type: 'FILTER_CATEGORY', payload: category });
  };

  const filterPriceHandler = (price) => {
    dispatch({ type: 'FILTER_PRICE', payload: price });
  };

  const filteredProducts = products.filter((product) => {
    if (filteredCategory && product.category !== filteredCategory) {
      return false;
    }
    if (filteredPrice && product.price > filteredPrice) {
      return false;
    }
    return true;
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
            <option value="Shorts">Shorts</option>
            <option value="Pants">Pants</option>
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
            <option value="200">Below $200</option>s
            <option value="300">Below $300</option>
          </select>
        </div>
      </div>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : filteredProducts.length === 0 ? (
          <MessageBox>No products found.</MessageBox>
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
