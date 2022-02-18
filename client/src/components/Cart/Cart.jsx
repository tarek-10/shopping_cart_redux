import React, { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Bounce from "react-reveal/Bounce";
import "./Cart.css";
import { connect } from "react-redux";
import { RemoveFromCart } from "../../Store/action/cart";
import Modal from "react-modal";
function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const [order, setOrder] = useState(false);
  const closeModal = () => {
    setOrder(false);
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
    setOrder(order);
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
      <Modal isOpen={order} onRequestClose={closeModal}>
        <span onClick={closeModal} className="close-modal">
          &times;
        </span>
        <div className="modal-items">
          <p className="modaltitle">order done successfully...!</p>
          <table>
            <tr>
              <td className="td-t">Name:</td>
              <td className="td-r">{order.name}</td>
            </tr>
            <tr>
              <td className="td-t">Email:</td>
              <td className="td-r">{order.email}</td>
            </tr>
            <tr>
              <td className="td-t">Total:</td>
              <td className="td-r">
                $
                {props.cartItems.reduce((a, p) => {
                  return a + +p.price;
                }, 0)}
              </td>
            </tr>

            <tr>
              <td className="td-t">Selected Items :</td>
              <td className="td-r">
                {props.cartItems.map((p) => (
                  <div className="modal-data">
                    <p className="modal-data-desc">
                      Number Of Products: {p.qty}
                    </p>
                    <p className="modal-data-desc">
                      Title Of Products: {p.title}
                    </p>
                    <hr />
                  </div>
                ))}
              </td>
            </tr>
          </table>
        </div>
      </Modal>
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
      cartItems: state.cart.cartItems,
    };
  },
  { RemoveFromCart }
)(Cart);
