import React, { useState, useEffect } from "react";

export default function Cart(props) {
  const [quantity, setQuantity] = useState(props.menu.count);

  useEffect(() => {
    props.addToCart(props.menu, quantity);
  }, [quantity]);

  return (
    <li>
      <div className="plate">
        <img src={`./images/${props.menu.image}`} alt={props.menu.alt} className="plate" />
        <div className="quantity">{quantity}</div>
      </div>
      <div className="content">
        <p className="menu-item">{props.menu.name}</p>
        <p className="price">${props.menu.price / 100}</p>
      </div>
      <div className="quantity__wrapper">
        <button className="decrease" onClick={() => setQuantity(quantity - 1)}>
          <img src="./images/chevron.svg" alt="" />
        </button>
        <div className="quantity">{quantity}</div>
        <button className="increase" onClick={() => setQuantity(quantity + 1)}>
          <img src="./images/chevron.svg" alt="" />
        </button>
      </div>
      <div className="subtotal">${(quantity * props.menu.price) / 100}</div>
    </li>
  );
}
