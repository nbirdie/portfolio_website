import React from "react";
import { FC } from "react";
import { useState } from "react";
import { StyledBurger, StyledRightNav } from "./Burger.styles";
import { NavbarLinks } from "./links";

//how to make burger menu https://github.com/dieudonneAwa/responsive-navbar

export const Burger: FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <StyledRightNav open={open}>
                <ul className="nav__list">
                    {NavbarLinks.map(({ path, text }) => (
                        <li key={path} className="nav__link">
                            <a href={path} onClick={() => setOpen(false)}>{text}</a>
                        </li>
                    ))}
                </ul>
            </StyledRightNav>
        </>
    );
};
