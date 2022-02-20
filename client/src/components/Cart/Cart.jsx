import React, { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Bounce from "react-reveal/Bounce";
import "./Cart.css";
import { connect } from "react-redux";
import { RemoveFromCart } from "../../Store/action/cart";
import OrderModal from "../OrderModal/OrderModal";
import { createOrder, clearOrder } from "../../Store/action/order";
function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const closeModal = () => {
    props.clearOrder();
    setShowForm(false);
    localStorage.clear("cartItems");
  };
  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submittOrder = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    props.createOrder(order);
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length == 0 ? (
          "Empty Cart"
        ) : (
          <p> There is {props.cartItems.length} Item In Your Cart</p>
        )}
      </div>
      {/* Model */}
      <OrderModal
        closeModal={closeModal}
        cartItems={props.cartItems}
        orders={props.order}
      />
      {props.cartItems.map((item) => (
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
            <button
              className="cart-btn"
              onClick={() => props.RemoveFromCart(item)}
            >
              Remove
            </button>
          </div>
        </Bounce>
      ))}
      {props.cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="total">
            Total : $
            {props.cartItems.reduce((acc, item) => {
              return acc + +item.price;
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

export default connect(
  (state) => {
    return {
      order: state.order.order,
      cartItems: state.cart.cartItems,
    };
  },
  { RemoveFromCart, createOrder, clearOrder }
)(Cart);
