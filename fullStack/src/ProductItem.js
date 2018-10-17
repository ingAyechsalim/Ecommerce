import React from "react";
import "./productItem.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
class ProductItem extends React.Component {
  onRemoveProduct = () => {
    axios
      .delete(`/products/${this.props.product._id}`)
      .then(() =>
        this.props.onRemoveProductReducerAction(this.props.product._id)
      )
      .catch(err => alert(err));
  };
  render() {
    return (
      <div className="productItem-container">
        <Link to={`/products/${this.props.product.name}`}>
          <div className="img-container">
            <img src={this.props.product.picture} />
          </div>
        </Link>

        <div className="product-name">{this.props.product.name}</div>
        <div className="product-description">
          {this.props.product.description}
        </div>
        <div className="product-price">{this.props.product.price}</div>
        <div>
          <Link to={`/edit-page/${this.props.product.name}`}>
            <button>Edit</button>
          </Link>
          <button style={{ marginLeft: "7px" }} onClick={this.onRemoveProduct}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveProductReducerAction: id => {
      dispatch({
        type: "REMOVE_PRODUCT",
        id
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);
