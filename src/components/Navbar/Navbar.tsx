import React from "react";
import { StyledNav, StyledLogo } from "./Navbar.styles";
import { Burger } from "../Burger";


export const Navbar = () => {

    return (
        <StyledNav>
            <div className="container nav__container">
                <StyledLogo>Portfolio<p>S</p></StyledLogo>
                <Burger/>
            </div>
        </StyledNav>
    );
}

