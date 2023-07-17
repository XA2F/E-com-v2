import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <section id="menu-icon">
            <img src="images/f-removebg-preview.png" alt="Menu" />
          </section>
          <nav>
            <ul className="navbar">
              <li>
                <Link to="/products">Men</Link>
              </li>
              <li>
                <Link to="/products">Women</Link>
              </li>
              <li>
                <Link to="/products">Fashion</Link>
              </li>
            </ul>
          </nav>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Fancy Pants</Navbar.Brand>

                {/* <Navbar>Poducts</Navbar>
                <Navbar>About</Navbar>
                <Navbar>Contact</Navbar> */}
              </LinkContainer>
              {/* <Nav className="me-auto"> */}
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
              {/* </Nav> */}
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <section id="contact">
            <section className="footer">
              <section className="main">
                <section className="col">
                  <h4>Our services</h4>
                  <ul>
                    <li>
                      <a href="#">Clothing</a>
                    </li>
                    <li>
                      <a href="#">Warehouse Pickup</a>
                    </li>
                    <li>
                      <a href="#">Delivery</a>
                    </li>
                  </ul>
                </section>

                <section className="col">
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Orders</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                  </ul>
                </section>

                <section className="col">
                  <h4>Contact us</h4>
                  <section className="social">
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://twitter.com/?lang=en">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
