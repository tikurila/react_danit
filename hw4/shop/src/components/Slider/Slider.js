import React, { Component } from 'react';
import './Slider.scss';
import one_img from './img/1.png';
import two_img from './img/2.png';
import three_img from './img/3.png';

export default class Slider extends Component {
    render() {
        return (
            <div>
            <div className="bg-black">
             <div className="bg-white">
                 <span className="welcome-text">WELCOME TO  <span className="word-musica">MUSICA,</span> CHECK OUR LATEST ALBUMS</span>
             </div>
            </div>
            <button className="btn_one"><span><img src={one_img}></img>CHECK OUR CO COLLECTION</span></button><button className="btn_two"><span><img src={two_img}></img>LISTEN BEFORE PURCHASE</span><p>Lorem Ipsum has been the <br></br>industry's standard dummy</p></button><button className="btn_three"><span><img src={three_img}></img>UPCOMING EVENTS</span></button>
            </div>
        )
    }
}
