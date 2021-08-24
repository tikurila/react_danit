import axios from "axios";
import { connect } from "react-redux";
import React, { Component } from "react";
import album_one from "../Music/img/1.jpg";
import "./Cart.scss";
class Cart extends Component {
  

  async componentDidMount() {
    const cartitem = await axios.get('http://localhost:3000/cart')

    cartitem.data.map(item => {
      this.props.onaddCart(item);
    })
  }
  
  render() {
    return (
      <div className="container">

        {this.props.storecart.map((el) => {
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
export default connect(
  (state) => ({
    storecart: state.cart,
  }),
  dispatch => ({
    onaddCart: (el) => {
      dispatch({ type: "ADD_CART", payload: el });
    },
  })
)(Cart);