import React from "react";
import { FC } from "react";
import { StyledSection } from "./Header.styles";
import FrontendDeveloper from "../../images/frontend.png";

const Header: FC = () => {
    return (
        <StyledSection>
            <div className="container">
                <div className="header__info">
                    <h1>
                        <p>Hello Friend! I'm,</p>
                        <span>Ekaterina Shadrina,</span>
                        <p>
                            a passionate frontend developer focused on creating
                            interactive, accessible, and responsive interfaces.
                        </p>
                    </h1>
                    <div className="header__links">
                      <a className="header__link-mywork btn">See My Work</a>
                      <a className="header__link-resume btn">View Resume</a>
                    </div>
                </div>
                <div className="header__animation">
                    <img
                        src={FrontendDeveloper}
                        alt="frontend developer icon"
                    />
                </div>

                <h1></h1>
            </div>
        </StyledSection>
    );
};

export default Header;
