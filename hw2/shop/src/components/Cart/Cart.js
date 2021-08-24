import axios from "axios";
import React, { Component } from "react";
import album_one from "../Music/img/1.jpg";
import "./Cart.scss";
export default class Cart extends Component {
  state = {
    cart: [],
  };

  cartItem = () => {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => {
        this.setState({ cart: response.data });
      })
      .catch((error) => {
        //  console.log(error);
      });
  };
  render() {
    return (
      <div className="container">
        <button onClick={this.cartItem} className="btn_chek">Показать товары</button>

        {this.state.cart.map((el) => {
          const { text, nam, by, text_cont, price } = el;

          return (
            <div className="small">
              <div className="con_cart2">
                {/* <img className="img_al" src={album_one}></img> */}
                <span className="text_artist">
                  {nam}
                  <i>{by}</i>
                </span>
								<br></br>
                <p className="text_cont2">{text}</p>
                <span className="price2">
                  {price}
								
                </span>
							
								
              </div>
							<hr></hr>
            </div>
          );
        })}
      </div>
    );
  }
}
