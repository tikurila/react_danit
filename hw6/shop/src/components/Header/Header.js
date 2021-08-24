import React, { Component } from "react";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="head">
        <div className="container-nav">
          <span className="nav-head-ms">MStore</span>{" "}
          <span className="nav-head">
            <a href="#" data-testid="test_tag_home">
              HOME
            </a>
          </span>
          <span className="nav-head">
            <a href="#" data-testid="test_tag_slider">SLIDER</a>
          </span>
          <span className="nav-head">
            <a href="#" data-testid="test_tag_music">MUSIC</a>
          </span>
          <span className="nav-head">
            <a href="#" data-testid="test_tag_publisher">PUBLISHER</a>
          </span>
        </div>
      </div>
    );
  }
}
