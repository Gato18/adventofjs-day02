import "./styles.css";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";
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
  const [menuList, setMenuList] = useState(menuItems);
  const [subTotal, setSubTotal] = useState(0);

  let addToCart = (menu, qte = 1) => {
    let index = menuList.findIndex((e) => e.name === menu.name);
    if (index > -1) {
      let newItems = [...menuList];
      newItems[index].count = qte;
      setMenuList(newItems);
    }
    setSubTotal(menuList.reduce((a, b) => a + (b.count * b.price) / 100, 0));
  };

  //On créé le composant menu pour afficher la liste des menus.
  let menu = menuItems.map((item, i) => {
    return <Menu key={i} menu={item} addToCart={addToCart} />;
  });

  let cart = menuList
    .filter((item) => item.count !== 0)
    .map((menu, i) => {
      return <Cart key={i} menu={menu} addToCart={addToCart} />;
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

        <ul className="cart-summary">{cart}</ul>

        <div className="totals">
          <div className="line-item">
            <div className="label">Subtotal:</div>
            <div className="amount price subtotal">${Math.round(subTotal * 100) / 100}</div>
          </div>
          <div className="line-item">
            <div className="label">Tax:</div>
            <div className="amount price tax">${Math.round(subTotal * 0.0975 * 100) / 100}</div>
          </div>
          <div className="line-item total">
            <div className="label">Total:</div>
            <div className="amount price total">${Math.round((subTotal + subTotal * 0.0975) * 100) / 100}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
