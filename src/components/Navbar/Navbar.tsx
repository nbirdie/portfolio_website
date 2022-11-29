import React from "react";
import { Link } from "react-router-dom";
import { StyledNav, StyledLogo } from "./Navbar.styles";
import { NavbarLinks } from "./links";

function Navbar() {
    return (
        <StyledNav>
            <div className="container nav__container">
                <StyledLogo>S</StyledLogo>
                <ul className="nav__list">
                    {NavbarLinks.map(({ path, text }) => (
                        <li key={path} className="nav__link">
                            <a>{text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledNav>
    );
}

export default Navbar;
