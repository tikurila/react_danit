import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component {
    render() {
        return (
            <div className="head">
         
          <div className="container-nav">
          
          <span className="nav-head-ms">MStore</span>  <span className="nav-head"><a href="#">HOME</a></span><span  className="nav-head"><a href="#">SLIDER</a></span><span  className="nav-head"><a href="#">MUSIC</a></span><span  className="nav-head"><a href="#">PUBLISHER</a></span></div>
            </div>

        )
    }
}
