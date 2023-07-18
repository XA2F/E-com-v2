import { createContext, useReducer } from 'react'; // Importing createContext and useReducer hooks from react

export const Store = createContext(); // Creating a context named Store

const initialState = {
  // Initial state for the store
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [], // Retrieve cart items from localStorage if present, otherwise initialize as an empty array
  },
};

function reducer(state, action) {
  // Reducer function to handle state transitions based on actions
  switch (action.type) {
    case 'CART_ADD_ITEM':
      // add to cart
      const newItem = action.payload; // Get the new item to be added to the cart
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      ); // Check if the new item already exists in the cart
      const cartItems = existItem
        ? state.cart.cartItems.map(
            (item) => (item._id === existItem._id ? newItem : item) // If the item exists, update its quantity, otherwise add it to the cart
          )
        : [...state.cart.cartItems, newItem]; // Add the new item to the cart
      localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update the cartItems in localStorage
      return { ...state, cart: { ...state.cart, cartItems } }; // Return the updated state with the modified cartItems

    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      ); // Filter out the item to be removed from the cart
      localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update the cartItems in localStorage
      return { ...state, cart: { ...state.cart, cartItems } }; // Return the updated state with the modified cartItems
    }

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState); // Use the reducer function and initial state to create a state management system
  const value = { state, dispatch }; // Create an object with the state and dispatch function
  return <Store.Provider value={value}>{props.children} </Store.Provider>; // Wrap the children components with the Store.Provider, providing the state and dispatch as the value
}
