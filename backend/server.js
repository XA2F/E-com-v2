import express from 'express'; // Importing the express library
import data from './data.js'; // Importing data from a local file
import mongoose from 'mongoose'; // Importing the mongoose library
import dotenv from 'dotenv'; // Importing the dotenv library for environment variables

dotenv.config(); // Loading environment variables from .env file

mongoose
  .connect(process.env.MONGODB_URI) // Connecting to the MongoDB database using the MONGODB_URI environment variable
  .then(() => {
    console.log('connected to db'); // Logging a success message if the connection is successful
  })
  .catch((err) => {
    console.log(err.message); // Logging an error message if the connection fails
  });

const app = express(); // Creating an instance of the express application

// Endpoint to get all products
app.get('/api/products', (req, res) => {
  res.send(data.products); // Sending the product data as the response
});

// Endpoint to get a product by slug
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug); // Finding a product with the matching slug
  if (product) {
    res.send(product); // Sending the product as the response if found
  } else {
    res.status(404).send({ message: 'Product Not Found' }); // Sending a 404 status code with an error message if product is not found
  }
});

// Endpoint to get a product by id
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id); // Finding a product with the matching id
  if (product) {
    res.send(product); // Sending the product as the response if found
  } else {
    res.status(404).send({ message: 'Product Not Found' }); // Sending a 404 status code with an error message if product is not found
  }
});

const port = process.env.PORT || 5000; // Getting the port number from the environment variable or using a default value of 5000
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`); // Starting the server and logging the server's URL
});
