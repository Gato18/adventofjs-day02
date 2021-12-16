import React, { useState } from "react";

export default function Menu(props) {
  const [button, setButton] = useState(
    <button className="add" onClick={() => add(props)}>
      Add to Cart
    </button>
  );

  let add = (menu) => {
    setButton(
      <button className="in-cart">
        <img src="./images/check.svg" alt="Check" />
        In Cart
      </button>
    );
    menu.menu.count = 1;
    props.addToCart(menu);
  };

  return (
    <li>
      <div className="plate">
        <img src={`./images/${props.menu.image}`} alt={props.menu.alt} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{props.menu.name}</p>
        <p className="price">${props.menu.price / 100}</p>
        {button}
      </div>
    </li>
  );
}
