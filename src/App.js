import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './data';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2);
  };

  return (
    <div className="app">
      <h1>Product Catalog</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} calculateTotal={calculateTotal} />
    </div>
  );
};

export default App;