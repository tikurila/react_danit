import React from "react";
import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";

describe("test Navbar", () => {
  test("Navbar", () => {
    render(<Navbar />);

    const element_inst = screen.getByTestId("test_inst");
    const element_twit = screen.getByTestId("test_twit");
    const element_youtube = screen.getByTestId("test_youtube");
    const element_login = screen.getByTestId("test_login");

    element_inst.click();
    element_twit.click();
    element_youtube.click();
    element_login.click();
  });
});
