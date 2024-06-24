import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, addToCart, removeFromCart, calculateTotal }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
      {cartItems.length > 0 && (
        <React.Fragment>
          <hr />
          <h3 className="cart-total">Total: {calculateTotal()}</h3>
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;