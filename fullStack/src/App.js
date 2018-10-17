import React, { Component } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar">
            <Link to="/">
              <div className="btn-container">Home Page</div>
            </Link>
            <Link to="/add-product">
              <div className="btn-container">Add Product</div>
            </Link>
          </div>
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
