import React from 'react';

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <div className="item-actions">
          <button onClick={() => addToCart(item)}>+</button>
          <span>{item.qty}</span>
          <button onClick={() => removeFromCart(item)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;