import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
class HomePage extends Component {
  componentDidMount() {
    axios.get("/products").then(res => this.props.initProductsList(res.data));
  }
  render() {
    return (
      <div className="App">
        <div className="products-list-display">
          {this.props.ProductsList.map((e, i) => (
            <ProductItem key={i} product={e} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ProductsList: state.ProductsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initProductsList: products => {
      dispatch({
        type: "UPDATE_PRODUCTS_LIST",
        products
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
