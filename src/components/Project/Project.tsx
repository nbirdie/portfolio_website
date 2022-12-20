import React from "react";
import { FC } from "react";
import { StyledProject } from "./Project.styles";
import { PortfolioProject } from "../../interface";

export const Project: FC<PortfolioProject> = ({
    heading,
    paragraphs,
    tech,
    live,
    source,
    image,
    name,
}) => {
    return (
        <StyledProject>
            <img src={image} alt="project example picture" />
            <div className="project__container">
                <h5>{heading}</h5>
                {paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
                <ul className="technologies__list">
                  {tech.map((technology,i) => (
                    <li className="technologies__item">{technology}</li>
                  ))}
                </ul>
                <div className="project__links">
                    {/* <a className="project__live btn">Live</a> */}
                    <a className="project__source btn" href={source}>Github</a>
                </div>
            </div>
        </StyledProject>
    );
};
