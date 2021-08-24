import React from "react";
import Slider from "./Slider";
import { render, screen } from "@testing-library/react";

describe("test Slider", () => {
  test("Slider", () => {
    render (<Slider />)
    const element_btnOne = screen.getByTestId("test_btnOne");
    const element_btnTwo = screen.getByTestId("test_btnTwo");
    const element_btnThree = screen.getByTestId("test_btnThree");

    element_btnOne.click();
    element_btnTwo.click(); 
    element_btnThree.click();
  });
});
