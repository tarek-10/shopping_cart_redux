import React from "react";
import Modal from "react-modal";

function OrderModal(props) {
  let { orders, closeModal, cartItems } = props;
  console.log("====================================");
  console.log("----", orders);
  console.log("====================================");
  return (
    <>
      {orders && (
        <Modal isOpen={orders} onRequestClose={closeModal}>
          <span onClick={closeModal} className="close-modal">
            &times;
          </span>
          <div className="modal-items">
            <p className="modaltitle">order done successfully...!</p>
            <table>
              <tr>
                <td className="td-t">Name:</td>
                <td className="td-r">{orders.order[0].name}</td>
              </tr>
              <tr>
                <td className="td-t">Email:</td>
                <td className="td-r">{orders.order[0].email}</td>
              </tr>
              <tr>
                <td className="td-t">Total:</td>
                <td className="td-r">
                  $
                  {cartItems.reduce((a, p) => {
                    return a + +p.price;
                  }, 0)}
                </td>
              </tr>

              <tr>
                <td className="td-t">Selected Items :</td>
                <td className="td-r">
                  {cartItems.map((p) => (
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
      )}
    </>
  );
}

export default OrderModal;
