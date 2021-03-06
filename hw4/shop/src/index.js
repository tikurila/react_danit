import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  post: [],
  cart: [],
};

function actionList(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POST':
        return {
          ...state,
          post: [...state.post, action.payload]
        }
    case 'ADD_CART': 
    return {
      ...state,
      cart: [...state.cart, action.payload]
    }
    default: 
    return state
  }
}

const store = createStore(
  actionList,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
