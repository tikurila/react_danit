import React, { Component } from "react";
import ReactDOM from "react-dom";

import Product from "./components/Product/Product";

import "./App.scss";

class App extends Component {
  state = {
    post: [
      { 
        id: 1,
        title: "Open first modal",
        titleModal: "Do you want to delete this file?",
        contentModal: "Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?",
        modal_bcgr: "backgr",
        modal: "modal",
        title_mod: "title_mod",
        btn_x: "btn_x",
        btn_ok: "btn_ok",
        btn_cancel: "btn_cancel"
      },
      { 
        id: 2,
        title: "Open second modal",
        titleModal: "Save this file?",
        contentModal: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been?",
        modal_bcgr: "backgr_two",
        modal: "modal_two",
        title_mod: "title_mod_two",
        btn_x: "btn_x_two",
        btn_ok: "btn_ok_two",
        btn_cancel: "btn_cancel_two"
      }
      
    ]
  };

  render() {
    return (
      <div className="holder">
        <Product data={this.state.post} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;