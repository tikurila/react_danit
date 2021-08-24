import React, { Component } from "react";
import axios from 'axios';
import "./Modal.scss";


    export default class Modal extends Component {
        state = {
          post: [],
        }

        componentDidMount(){
            axios.get('http://localhost:3000/post')
                .then( response => {
                  this.setState({post: response.data})
                  console.log(this.state.post)
            })
           .catch(error =>  {
              //  console.log(error);
          });
        }
      render() {
          this.state.post.forEach( e => {
           
            document.onclick = event => {
                // debugger
                // console.log(event.target.id)
                console.log(e.id);
                if(event.target.id == 1 || 
                    event.target.id == 2 ||
                    event.target.id == 3 ||
                    event.target.id == 4 ||
                    event.target.id == 5 ||
                    event.target.id == 6 ||
                    event.target.id == 7 ||
                    event.target.id == 8 
                     ) {
                   
                    const user = {
                        text_cont: e.text_cont,
                        contain_cart: e.contain_cart,
                        nam: e.nam,
                        by: e.by,
                        text: e.text,
                        price: e.price
                    }
                    axios.post('http://localhost:3000/cart', user) 
                } 
            }
          })
       
       
      
          const { handleClose, show, children} = this.props;
          const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  

          return (
              <div className={showHideClassName}>
                  <section className='modal-main'>
                      {children}
                      <button className="btn_ok plus" data-id="one" onClick={handleClose}>
                          Add to Cart
                      </button>
                      <button className="btn_close" onClick={handleClose}>
                          Close
                      </button>
                  </section>
              </div>
          );
      }
  }
    