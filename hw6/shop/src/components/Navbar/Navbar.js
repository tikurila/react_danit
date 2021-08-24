import React, { Component } from "react";
import "./Navbar.scss";
import inst from "./img/fb.png";
import twit from "./img/tw.png";
import youtube from "./img/yt.png";
// import cart from './img/cart.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className="bac_nav">
        <div className="icon">
          <a href="#" data-testid="test_inst">
            <img src={inst}></img>
          </a>
          <a href="#" data-testid="test_twit">
            <img src={twit}></img>
          </a>
          <a href="#" data-testid="test_youtube">
            <img src={youtube}></img>
          </a>
        </div>
        <span className="log_reg">
          <a href="#" data-testid="test_login">
            Login
          </a>
          <span>/</span>
          <a href="#">Register</a>
        </span>
        {/* <a href="#"> <img src={cart} className="cart"></img></a>  */}
      </div>
    );
  }
}
