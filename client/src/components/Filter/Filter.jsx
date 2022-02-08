import React from "react";
import "./Filter.css";
import Flip from "react-reveal/Flip";
function Filter({
  handlerFitlerBySize,
  size,
  handlerFilterByOrder,
  sort,
  productsNumber,
}) {
  return (
    <>
      <Flip right>
        <div className="mainFilter">
          <h2 className="filter-title">Filter</h2>
          <div className="num-of-products">
            Number Of Product {productsNumber}
          </div>
          <div className="filter-by-size">
            <span className="filter-size">Filter</span>
            <select
              value={size}
              className="filter-select"
              onChange={handlerFitlerBySize}
            >
              <option value="ALL">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <div className="filter-by-sort">
            <span className="filter-size">Order</span>
            <select
              value={sort}
              className="filter-select"
              onChange={handlerFilterByOrder}
            >
              <option value="Latest">Latest</option>
              <option value="Lowest">Lowest</option>
              <option value="Hightest">Highest</option>
            </select>
          </div>
        </div>
      </Flip>
    </>
  );
}

export default Filter;
