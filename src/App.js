import "./App.css";

import React, { Component } from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" class="btn btn-primary mb-10">
                Thêm sản phẩm
              </button>
              <ProductList />
            </div>
          </div>
        </div>
      </>
    );
  }
}
