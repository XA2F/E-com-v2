import Card from 'react-bootstrap/Card'; // Importing the Card component from the react-bootstrap library
import Button from 'react-bootstrap/Button'; // Importing the Button component from the react-bootstrap library
import { Link } from 'react-router-dom'; // Importing the Link component from the react-router-dom library
import Rating from './Rating'; // Importing the Rating component from a local file called Rating.js
import axios from 'axios'; // Importing the axios library for making HTTP requests
import { useContext } from 'react'; // Importing the useContext hook from the React library
import { Store } from '../Store'; // Importing the Store context from a local file

function Product(props) {
  const { product } = props; // Destructuring the product prop

  const { state, dispatch: ctxDispatch } = useContext(Store); // Using the useContext hook to access the state and dispatch function from the Store context
  const {
    cart: { cartItems },
  } = state; // Destructuring the cartItems array from the state's cart object

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id); // Checking if the product is already in the cart by searching for a matching _id
    const quantity = existItem ? existItem.quantity + 1 : 1; // Incrementing the quantity if the product already exists in the cart, otherwise setting it to 1

    const { data } = await axios.get(`/api/products/${item._id}`); // Making an API request to get the product's data from the server

    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock'); // Displaying an alert if the product is out of stock
      return;
    }

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    }); // Dispatching an action to add the product to the cart with the updated quantity
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? ( // Conditional rendering based on the product's countInStock value
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>Add to cart</Button> // Rendering an "Add to cart" button if the product is in stock, calling the addToCartHandler function when clicked
        )}
      </Card.Body>
    </Card>
  );
}

export default Product; // Exporting the Product component as the default export
