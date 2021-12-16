import React from "react";

export default function Menu(props) {
  let button = "";
  if (props.menu.count === 0) {
    button = (
      <button className="add" onClick={() => add(props)}>
        Add to Cart
      </button>
    );
  } else {
    button = (
      <button className="in-cart">
        <img src="./images/check.svg" alt="Check" />
        In Cart
      </button>
    );
  }

  let add = (menu) => {
    props.addToCart(menu.menu);
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
