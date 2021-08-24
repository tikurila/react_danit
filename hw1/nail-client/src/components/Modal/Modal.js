import React, { Component } from "react";

import "./Modal.scss";

class Modal extends Component {
  render() {
    
    console.log(this.props.show);
    return (
      <React.Fragment>
        {this.props.show && (
          <div>
         
           <button className={this.props.modal_bcgr} onClick={this.props.onHide}></button>
           <div className={this.props.modal}>
            <h1>{this.props.titleModal}</h1>
           
            <h3 className={this.props.title_mod}> {this.props.x}  <button className={this.props.btn_x} onClick={this.props.onHide}>Х</button></h3>
          <p className="content_modal">{this.props.contentModal}
          </p>
          <button className={this.props.btn_ok} onClick={this.props.onHide}>Ок</button> <button className={this.props.btn_cancel} onClick={this.props.onHide}>Отмена</button>
          </div> 
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
