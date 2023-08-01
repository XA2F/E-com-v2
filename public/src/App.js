import React from 'react'; // Importing React library
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importing BrowserRouter, Route, and Routes components from react-router-dom
import HomeScreen from './screens/HomeScreen'; // Importing the HomeScreen component from a local file
import ProductScreen from './screens/ProductScreen'; // Importing the ProductScreen component from a local file
import Navbar from './components/Navbar'; // Importing the Navbar component from a local file
import Container from 'react-bootstrap/Container'; // Importing the Container component from the react-bootstrap library
import CartScreen from './screens/CartScreen';

//imports

//wrap the entire browser router to enable routing
//displaying our Navabar component
//the rest is defining routes
const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar />
        </header>
        <main>
          <Container className="mt-3">
            {' '}
            <Routes>
              {' '}
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
