import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Quản lý sản phẩm</h3>
        </div>
        <div className="panel-body">
          <table className="table table-hover border">
            <thead>
              <tr>
                <th>STT</th>
                <th>TÊN</th>
                <th>GIÁ</th>
                <th>TRẠNG THÁI</th>
                <th>HÀNH ĐỘNG</th>
              </tr>
            </thead>
            <tbody>
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
