import React, { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Bounce from "react-reveal/Bounce";
import "./Cart.css";
function Cart({ cartItems, removeFromCart }) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const order = {
    name: value.name,
    email: value.email,
  };
  console.log(order);
  const submittOrder = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {cartItems.length == 0 ? (
          "Empty Cart"
        ) : (
          <p> There is {cartItems.length} Item In Your Cart</p>
        )}
      </div>
      {cartItems.map((item) => (
        <Bounce bottom cascade>
          <div className="cart-items" key={item.id}>
            <img src={item.imageUrl} alt={item.title} />
            <div className="cart-info">
              <div>
                <p>title:{item.title}</p>
                <p>Qty: {item.qty}</p>
                <p>price:${item.price}</p>
              </div>
            </div>
            <button className="cart-btn" onClick={() => removeFromCart(item)}>
              Remove
            </button>
          </div>
        </Bounce>
      ))}
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="total">
            Total : $
            {cartItems.reduce((acc, item) => {
              return acc + item.price;
            }, 0)}
          </div>
          <button className="cart-btn" onClick={() => setShowForm(true)}>
            Select Products
          </button>
        </div>
      )}
      <CheckoutForm
        showForm={showForm}
        handleChange={handleChange}
        submittOrder={submittOrder}
        setShowForm={setShowForm}
      />
    </div>
  );
}

export default Cart;
