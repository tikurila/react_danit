import React, { Component } from "react";
import { connect } from "react-redux";
import album_one from "./img/1.jpg";
import "./Music.scss";

import Cart from "../Cart/Cart";
import axios from "axios";
class Music extends Component {


  componentDidMount() {
    axios.get("http://localhost:3000/post");
  }

  render() {
    return (
      <div className="container">
        <>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {this.props.storepost.map((item, index) =>{
                return(
                  <Cart
                  img=""
                  title={item.title}
                  text={item.text}
                  price={item.price}
                  item={item}
                />
                )
                })}
             
            </div>
          </section>
        </>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    storepost: state.post,
  }),
  (dispatch) => ({
    onaddPost: (el) => {
      dispatch({ type: "ADD_POST", payload: el });
    },
  })
)(Music);
