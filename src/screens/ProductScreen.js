import axios from 'axios'; // Importing the axios library for making HTTP requests
import { useContext, useEffect, useReducer } from 'react'; // Importing useContext, useEffect, and useReducer hooks from the react library
import { useNavigate, useParams } from 'react-router-dom'; // Importing the useNavigate and useParams hooks from the react-router-dom library
import Row from 'react-bootstrap/Row'; // Importing the Row component from the react-bootstrap library
import Col from 'react-bootstrap/Col'; // Importing the Col component from the react-bootstrap library
import Card from 'react-bootstrap/Card'; // Importing the Card component from the react-bootstrap library
import ListGroup from 'react-bootstrap/ListGroup'; // Importing the ListGroup component from the react-bootstrap library
import Badge from 'react-bootstrap/Badge'; // Importing the Badge component from the react-bootstrap library
import Button from 'react-bootstrap/Button'; // Importing the Button component from the react-bootstrap library
import Rating from '../components/Rating'; // Importing the Rating component from a local file
import { Helmet } from 'react-helmet-async'; // Importing the Helmet component from the react-helmet-async library
import LoadingBox from '../components/LoadingBox'; // Importing the LoadingBox component from a local file
import MessageBox from '../components/MessageBox'; // Importing the MessageBox component from a local file
import { getError } from '../utils'; // Importing the getError function from a local file
import { Store } from '../Store'; // Importing the Store context from a local file

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }; // Update the state to indicate that a fetch request is in progress
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false }; // Update the state with the fetched product and mark the loading as complete
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }; // Update the state with the error message and mark the loading as complete
    default:
      return state; // Return the current state if the action type is not recognized
  }
};

function ProductScreen() {
  const navigate = useNavigate(); // Get the navigate function from the useNavigate hook
  const params = useParams(); // Get the params object from the useParams hook
  const { slug } = params; // Destructure the slug from the params object

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  }); // Use the useReducer hook to manage state using the reducer function, initialize the state with default values

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' }); // Dispatch the FETCH_REQUEST action to indicate a fetch request is starting
      try {
        const result = await axios.get(`/api/products/slug/${slug}`); // Make an API request to fetch the product using the slug
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data }); // Dispatch the FETCH_SUCCESS action with the fetched product
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) }); // Dispatch the FETCH_FAIL action with the error message if the request fails
      }
    };
    fetchData();
  }, [slug]); // Trigger the effect whenever the slug changes

  const { state, dispatch: ctxDispatch } = useContext(Store); // Get the state and dispatch function from the Store context
  const { cart } = state; // Destructure the cart from the state
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id); // Check if the product already exists in the cart
    const quantity = existItem ? existItem.quantity + 1 : 1; // Determine the quantity to be added to the cart
    const { data } = await axios.get(`/api/products/${product._id}`); // Make an API request to get the product details
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock'); // Display an alert if the product is out of stock
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    }); // Dispatch the CART_ADD_ITEM action with the product and quantity to add it to the cart
    navigate('/cart'); // Navigate to the cart page
  };
  return loading ? (
    <LoadingBox /> // Display the LoadingBox component if the data is still loading
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox> // Display the error message if an error occurs
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>{' '}
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>{' '}
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge> // Display "In Stock" badge if the product is available
                      ) : (
                        <Badge bg="danger">Unavailable</Badge> // Display "Unavailable" badge if the product is out of stock
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">
                        Add to Cart
                      </Button>{' '}
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
