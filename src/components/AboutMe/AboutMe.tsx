import React from "react";
import { FC } from "react";
import { Technologies } from "../Technologies";
import { StyledSection, StyledSubSection } from "./AboutMe.styles";

export const AboutMe: FC = () => {
    return (
        <StyledSection>
            <h2>About Me</h2>
            <p className="aboutme__subtitle">
                You will find a little intro about me and the skills and
                technologies I use daily.
            </p>
            <div className="container">
                <StyledSubSection>
                    <div className="aboutme__info">
                        <h3>Summary</h3>
                        <p>
                            I'm a Frontend Developer whose whole interest is
                            building interactive, accessible, and responsive
                            websites. My project section contains some beautiful
                            websites I've built.
                        </p>

                        <p>
                            I'm currently open to Job opportunities where I can
                            contribute to your business and make your users
                            happy. Contact me if you're interested in having a
                            taste of my skills.
                        </p>
                        <a className="btn">Contact Me</a>
                    </div>
                    <div className="aboutme__technologies">
                        <Technologies />
                    </div>
                </StyledSubSection>
            </div>
        </StyledSection>
    );
};
