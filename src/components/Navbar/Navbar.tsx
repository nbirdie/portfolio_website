import React from "react";
import { createRef, FC, useEffect, useRef } from "react";
import { StyledNav, StyledLogo } from "./Navbar.styles";
import { Burger } from "../Burger";

export const Navbar = () => {
    const navRef = useRef() as React.MutableRefObject<HTMLElement>;
    useEffect(() => {
        const addNavBackgroundOnScroll = () => {
            let height = window.pageYOffset;
            let nav = navRef.current;

            height > 80
                ? nav.classList.add("scrolled")
                : nav.classList.remove("scrolled");
        };

        window.addEventListener("scroll", addNavBackgroundOnScroll);

        return () => {
            window.removeEventListener("scroll", addNavBackgroundOnScroll);
        };
    }, []);

    return (
        <StyledNav ref={navRef}>
            <div className="container nav__container">
                <StyledLogo>
                    Portfolio<p>S</p>
                </StyledLogo>
                <Burger />
            </div>
        </StyledNav>
    );
};
