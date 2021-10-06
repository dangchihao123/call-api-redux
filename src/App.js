import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>
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
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" class="btn btn-primary mb-10">
                Thêm sản phẩm
              </button>
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
                      <tr>
                        <td>1</td>
                        <td>Iphone 6s</td>
                        <td>300</td>
                        <td>
                          <span className="label label-danger">hết hàng</span>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-success mr-10"
                          >
                            Sửa
                          </button>
                          <button type="button" className="btn btn-danger">
                            Xóa
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
