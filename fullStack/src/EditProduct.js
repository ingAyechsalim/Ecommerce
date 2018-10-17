import React from "react";
import "./App.css";
import { connect } from "react-redux";
import axios from "axios";
class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      categorie: ""
    };
  }

  onEditProduct = () => {
    axios
      .put(`/products/${this.state._id}`, {
        name: this.state.name,
        price: this.state.price,
        description: this.state.description,
        categorie: this.state.categorie
      })
      .then(() => this.props.onEditProductReducerAction(this.state))
      .catch(err => alert(err));
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    this.setState({
      ...this.props.ProductsList.filter(e => e.name === this.props.name)[0]
    });
  }
  render() {
    console.log(this.state);

    return (
      <div className="add-product-container">
        <h3>Edit Product Page</h3>
        <div className="input-conatiner">
          <label>Name</label>
          <input name="name" onChange={this.onChange} value={this.state.name} />
        </div>
        <div className="input-conatiner">
          <label>Picture</label>
          <input
            name="picture"
            onChange={this.onChange}
            value={this.state.picture}
          />
        </div>
        <div className="input-conatiner">
          <label>Price</label>
          <input
            name="price"
            onChange={this.onChange}
            value={this.state.price}
          />
        </div>
        <div className="input-conatiner">
          <label>Categorie</label>
          <input
            name="categorie"
            onChange={this.onChange}
            value={this.state.categorie}
          />
        </div>
        <div className="input-conatiner">
          <label>Description</label>
          <input
            name="description"
            onChange={this.onChange}
            value={this.state.description}
          />
        </div>
        <button onClick={this.onEditProduct}>Edit Product</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ProductsList: state.ProductsReducer
  };
};

const mapDispacthToProps = dispatch => {
  return {
    onEditProductReducerAction: product => {
      dispatch({
        type: "EDIT_PRODUCT",
        editedProduct: product
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(EditProduct);
