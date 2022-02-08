import React, { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";
import { Provider } from "react-redux";
import store from "./Store/store";
export default function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  // filter by size//
  const handlerFitlerBySize = (e) => {
    setSize(e.target.value);

    if (e.target.value == "ALL") {
      setProducts(data);
    } else {
      let productsClone = [...products];

      let newProducts = productsClone.filter(
        (p) => p.sizes.indexOf(e.target.value) != -1
      );

      setProducts(newProducts);
    }
  };
  //end

  //filter by order//
  const handlerFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productClone = [...products];
    let newProducts = productClone.sort(function (a, b) {
      if (order == "Lowest") {
        return a.price - b.price;
      } else if (order == "Hightest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };
  //end

  //add product to cart//
  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id == product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartItems(cartItemsClone);
  };
  //end

  //remove product from cart//
  const removeFromCart = (product) => {
    let cartItemClone = [...cartItems];
    let newItem = cartItemClone.filter((p) => p.id != product.id);
    setCartItems(newItem);
  };
  //end

  //save product in localstorage//
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  //end

  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} addToCart={addToCart} />
            <Filter
              size={size}
              sort={sort}
              productsNumber={products.length}
              handlerFitlerBySize={handlerFitlerBySize}
              handlerFilterByOrder={handlerFilterByOrder}
            />
          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}
