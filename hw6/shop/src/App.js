import React, { Component } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { Carousel } from "3d-react-carousal";
import img_one from "./img/1.jpg";
import img_two from "./img/2.jpg";
// import Cart from "./components/Cart/Cart";
import img_three from "./img/3.jpg";
import img_four from "./img/4.jpg";
import img_five from "./img/5.jpg";
import Form from "./components/Form/Form";
import Slider from "./components/Slider/Slider";
import Music from "./components/Music/Music";
import OneCart from "./components/Cart/OneCart";
import "./App.scss";
import cart_img from "./components/Navbar/img/cart.png";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CartProvider } from "react-use-cart";
class App extends Component {
  // state = {
  //   post: [],
  // };

  componentDidMount() {
    axios
      .get("http://localhost:3000/post")
      .then((response) => {
        response.data.map((item) => {
          this.props.onaddPost(item);
        });
      })
      .catch((error) => {
        //  console.log(error);
      });
  }

  // cartItem() {
  //   axios
  //     .get("http://localhost:3000/cart")
  //     .then((response) => {
  //       this.setState({ cart: response.data });
  //       console.log(this.state.cart);
  //     })
  //     .catch((error) => {
  //       //  console.log(error);
  //     });
  // }

  render() {
    //  console.log(this.props.storepost);

    let slides = [
      <img className="carousel-image" src={img_one} alt="1" />,
      <img className="carousel-image" src={img_two} alt="2" />,
      <img className="carousel-image" src={img_three} alt="3" />,
      <img className="carousel-image" src={img_four} alt="4" />,
      <img className="carousel-image" src={img_five} alt="5" />,
    ];
    return (
      <div className="App">
        <Router>
          <Link to="/" class="home_route">
            Home
          </Link>
          <br></br>
          <Link to="/onecart">
            <img src={cart_img} className="cart_img"></img>
          </Link>
          <Switch>
            <Route path="/onecart">
            <Form />
              <>
                <CartProvider>
                  <OneCart />
                </CartProvider>
              </>
            </Route>
            <Route path="/">
              <Navbar />
              <Header />
              <Carousel slides={slides} autoplay={false} />
              <Slider />
              <>
                <CartProvider>
                  <Music data={this.props.storepost} />
                </CartProvider>
              </>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

//

export default connect(
  (state) => ({
    storepost: state.post,
  }),
  // dispatch
  (dispatch) => ({
    onaddPost: (el) => {
      dispatch({ type: "ADD_POST", payload: el });
    },
  })
)(App);
