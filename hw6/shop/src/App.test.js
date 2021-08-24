import { render, screen } from "@testing-library/react";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

test("renders learn react link", () => {
  const initialState = {
    post: [],
    cart: [],
  };

  function actionList(state = initialState) {
    return state;
  }

  const store = createStore(actionList);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
