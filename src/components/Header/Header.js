import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">Call api</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a className="active">Trang chủ</a>
          </li>
          <li>
            <a>quản lý sản phẩm</a>
          </li>
        </ul>
      </div>
    );
  }
}
