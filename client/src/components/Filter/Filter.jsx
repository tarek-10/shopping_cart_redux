import React from "react";
import "./Filter.css";
import Flip from "react-reveal/Flip";
import { connect } from "react-redux";
import { filteredSort, filteredSizes } from "../../Store/action/product";
function Filter(props) {
  return (
    <>
      <Flip right>
        {props.filterProducts && (
          <div className="mainFilter">
            <h2 className="filter-title">Filter</h2>
            <div className="num-of-products">
              Number Of Product {props.filterProducts.length}
            </div>
            <div className="filter-by-size">
              <span className="filter-size">Filter</span>
              <select
                value={props.size}
                className="filter-select"
                onChange={(e) =>
                  props.filteredSizes(props.products, e.target.value)
                }
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
                value={props.sort}
                className="filter-select"
                onChange={(e) =>
                  props.filteredSort(props.filterProducts, e.target.value)
                }
              >
                <option value="Latest">Latest</option>
                <option value="Lowest">Lowest</option>
                <option value="Hightest">Highest</option>
              </select>
            </div>
          </div>
        )}
      </Flip>
    </>
  );
}

export default connect(
  (state) => {
    return {
      size: state.products.size,
      sort: state.products.sort,
      products: state.products.products,
      filterProducts: state.products.filterProducts,
    };
  },
  {
    filteredSizes,
    filteredSort,
  }
)(Filter);
