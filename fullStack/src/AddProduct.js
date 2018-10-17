import React from "react";
import "./App.css";
import { connect } from "react-redux";
import axios from "axios";
class AddProduct extends React.Component {
  onAddProduct = () => {
    axios
      .post("/products", this.state)
      .then(() => this.props.onAddProductReducerAction(this.state))
      .catch(err => alert(err));
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="add-product-container">
        <h3>Add Product Page</h3>
        <div className="input-conatiner">
          <label>Name</label>
          <input name="name" onChange={this.onChange} />
        </div>
        <div className="input-conatiner">
          <label>Picture</label>
          <input name="picture" onChange={this.onChange} />
        </div>
        <div className="input-conatiner">
          <label>Price</label>
          <input name="price" onChange={this.onChange} />
        </div>
        <div className="input-conatiner">
          <label>Categorie</label>
          <input name="categorie" onChange={this.onChange} />
        </div>
        <div className="input-conatiner">
          <label>Description</label>
          <input name="description" onChange={this.onChange} />
        </div>
        <button onClick={this.onAddProduct}>Add Product</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispacthToProps = dispatch => {
  return {
    onAddProductReducerAction: product => {
      dispatch({
        type: "ADD_PRODUCT",
        newProduct: product
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(AddProduct);
