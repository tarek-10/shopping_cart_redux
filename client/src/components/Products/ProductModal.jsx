import React from "react";
import Modal from "react-modal";

function ProductModal({ product, closeModal }) {
  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
      <span onClick={closeModal} className="closeModal">
        &times;
      </span>
      <div className="productDetailsWrapper">
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.desc}</p>
        <p>${product.price}</p>
      </div>
    </Modal>
  );
}

export default ProductModal;
