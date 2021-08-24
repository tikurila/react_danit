import React, { Component } from "react";

import Modal from "../Modal/Modal";

import "./Product.scss";

class Product extends Component {
  state = {
    showModal: 0
  };

  getModal = value => {
    this.setState({ showModal: value });
  };

  hideModal = value => {
    this.setState({ showModal: 0 });
  };

  render() {
  
    return (
      <div className="container">
        {this.props.data.map((data, key) => (
          <div key={key} className="small">

            <button onClick={() => this.getModal(data.id)}>{data.title}</button>
            <Modal
              show={this.state.showModal === data.id}
              onHide={() => this.hideModal(data.id)}
              name={data.name}
              titleModal={data.titleModal}
              contentModal={data.contentModal}
              modal_bcgr={data.modal_bcgr}
              modal = {data.modal}
              title_mod ={data.title_mod}
              btn_x = {data.btn_x}
              btn_ok = {data.btn_ok}
              btn_cancel = {data.btn_cancel}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Product;
