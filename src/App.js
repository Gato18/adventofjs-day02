import "./styles.css";
import Menu from "./Components/Menu";
import { useState } from "react";
const menuItems = [
  { name: "French Fries with Ketchup", price: 223, image: "plate__french-fries.png", alt: "French Fries", count: 0 },
  { name: "Salmon and Vegetables", price: 512, image: "plate__salmon-vegetables.png", alt: "Salmon and Vegetables", count: 0 },
  { name: "Spaghetti Meat Sauce", price: 782, image: "plate__spaghetti-meat-sauce.png", alt: "Spaghetti with Meat Sauce", count: 0 },
  { name: "Bacon, Eggs, and Toast", price: 599, image: "plate__bacon-eggs.png", alt: "Bacon, Eggs, and Toast", count: 0 },
  { name: "Chicken Salad with Parmesan", price: 698, image: "plate__chicken-salad.png", alt: "Chicken Salad with Parmesan", count: 0 },
  { name: "Fish Sticks and Fries", price: 634, image: "plate__fish-sticks-fries.png", alt: "Fish Sticks and Fries", count: 0 },
];

function App() {
  const [cart, setCart] = useState([]);

  let addToCart = (menu) => {
    console.log(menu.menu);
    setCart([...cart, menu.menu]);
  };
  console.log("cart", cart);

  //On créé le composant menu pour afficher la liste des menus.
  let menu = menuItems.map((item, i) => {
    return <Menu key={i} menu={item} addToCart={addToCart} />;
  });

  //Si le panier est vide on affiche du texte.
  let cartTxt = "";
  if (Object.keys(cart).length === 0) {
    cartTxt = "Your cart is empty.";
  }
  return (
    <div className="wrapper menu">
      <div className="panel">
        <h1>To Go Menu</h1>
        <ul className="menu">{menu}</ul>
      </div>

      <div className="panel cart">
        <h1>Your Cart</h1>
        <p className="empty">{cartTxt}</p>

        <ul className="cart-summary">
          <li>
            <div className="plate">
              <img src="./images/plate__fish-sticks-fries.png" alt="Fish Sticks and Fries" className="plate" />
              <div className="quantity">1</div>
            </div>
            <div className="content">
              <p className="menu-item">Fish Sticks and Fries</p>
              <p className="price">$6.34</p>
            </div>
            <div className="quantity__wrapper">
              <button className="decrease">
                <img src="./images/chevron.svg" alt="" />
              </button>
              <div className="quantity">1</div>
              <button className="increase">
                <img src="./images/chevron.svg" alt="" />
              </button>
            </div>
            <div className="subtotal">$6.34</div>
          </li>

          <li>
            <div className="plate">
              <img src="./images/plate__french-fries.png" alt="French Fries" className="plate" />
              <div className="quantity">2</div>
            </div>
            <div className="content">
              <p className="menu-item">French Fries with Ketchup</p>
              <p className="price">$2.23</p>
            </div>
            <div className="quantity__wrapper">
              <button className="decrease">
                <img src="./images/chevron.svg" alt="" />
              </button>
              <div className="quantity">2</div>
              <button className="increase">
                <img src="./images/chevron.svg" alt="" />
              </button>
            </div>
            <div className="subtotal">$4.46</div>
          </li>
        </ul>

        <div className="totals">
          <div className="line-item">
            <div className="label">Subtotal:</div>
            <div className="amount price subtotal">$10.80</div>
          </div>
          <div className="line-item">
            <div className="label">Tax:</div>
            <div className="amount price tax">$1.05</div>
          </div>
          <div className="line-item total">
            <div className="label">Total:</div>
            <div className="amount price total">$11.85</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
