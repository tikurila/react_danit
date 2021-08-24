import React from "react";
import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe('test Header', () => {
    test('test link', () => {
        render(<Header />);
        const element_home = screen.getByTestId('test_tag_home');
        const element_slider = screen.getByTestId('test_tag_slider');
        const element_music = screen.getByTestId('test_tag_music');
        const element_publisher = screen.getByTestId('test_tag_publisher');

        element_home.click();
        element_slider.click();
        element_music.click();
        element_publisher.click();
    });
    test('test title', () => {
        const render_header = render(<Header />)
         render_header.getByText("MStore");
    })
    
    
})
