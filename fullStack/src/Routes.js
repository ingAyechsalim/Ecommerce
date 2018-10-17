import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductItem from "./ProductItemDisplay";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <HomePage />} />
        <Route
          exact
          path="/products/:name"
          render={props => (
            <ProductItem
              name={props.match.params.name}
              data={this.props.data}
            />
          )}
        />
        <Route
          exact
          path="/edit-page/:name"
          render={props => <EditProduct name={props.match.params.name} />}
        />
        <Route exact path="/add-product" component={AddProduct} />
      </div>
    );
  }
}
export default Routes;
