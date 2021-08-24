import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../Modal/Modal"
import album_one from './img/1.jpg';
import "./Music.scss";

class Music extends Component {
 
  state = {
    show: false,
  }

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }

  render() {

    return (
      <div className="container">
        
        {this.props.storepost.map((data, key) => (
          <div key={key} className="small" >

            <div className={data.contain_cart}>

            <h1 class="title_name"> {data.title_name}</h1>

        <img className="img_al" src={album_one}></img>

         <span className="text_artist">{data.nam}<i>{data.by}</i></span>

         <p className="star">{data.star}</p>

         <p className={data.text_cont}>{data.text}</p>

         <span className="price">{data.price}</span>


            </div>
            <button className={data.btn_add} type='button' onClick={this.showModal} id={data.id}>{data.title}</button>
            <Modal show={this.state.show} handleClose={this.hideModal} >
          <p className="text_mod">Do you want to add this to your cart?</p>
          
        </Modal>

       
            <Modal
             btn_add={data.btn_add}
              name={data.name}
              titleModal={data.titleModal}
              contentModal={data.contentModal}
              modal = {data.modal}
              title_mod ={data.title_mod}
              btn_x = {data.btn_x}
              btn_ok = {data.btn_ok}
              btn_cancel = {data.btn_cancel}
              contain_cart = {data.contain_cart}
              text_cont = {data.text_cont}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    storepost: state.post
  }),
  dispatch => ({
    onaddPost: (el) => {
      dispatch({ type: 'ADD_POST', payload: el });
    }
  })
)(Music);