import axios from "axios";
import { connect } from "react-redux";
import React, { Component } from "react";
import album_one from "../Music/img/1.jpg";
import "./Cart.scss";
import {useCart} from "react-use-cart";

const Cart = (props) => {
  const {addItem} = useCart();
  return (
    <div className="container">
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div class="card p-0 overflow-hidden h-100 shadow">
          <img src={props.img} class="card-img-top img-fluid"/>
          <div class="card-body text-center">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.text}</p>
            <p class="card-text">{props.price}</p>
            <button class="btn btn-success" onClick={() =>addItem(props.item)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
// }
export default connect(
  (state) => ({
    storecart: state.cart,
  }),
  (dispatch) => ({
    onaddCart: (el) => {
      dispatch({ type: "ADD_CART", payload: el });
    },
  })
)(Cart);
