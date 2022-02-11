import React, { useEffect, useState } from "react";
import ProductModal from "./ProductModal";
import "./Products.css";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { fetchProducts } from "../../Store/action/product";
import { addToCart } from "../../Store/action/cart";
function Products(props) {
  console.log(props);
  const [product, setProduct] = useState("");
  const operModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(false);
  };
  useEffect(() => {
    props.fetchProducts();
  }, []);
  return (
    <Bounce left cascade>
      <div className="productWrapper">
        {props.products && props.products.length
          ? props.products.map((product) => (
              <div className="product-item" key={product.id}>
                <a href="#" onClick={() => operModal(product)}>
                  <img src={product.imageUrl} alt={product.title} />
                </a>
                <div className="product-desc">
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </div>
                <button
                  className="product-btn"
                  onClick={() => props.addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            ))
          : "there is no products"}
        <ProductModal closeModal={closeModal} product={product} />
      </div>
    </Bounce>
  );
}

export default connect(
  (state) => {
    return { products: state.products.filterProducts };
  },
  { fetchProducts, addToCart }
)(Products);
