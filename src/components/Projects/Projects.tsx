import React from "react";
import { FC } from "react";
import { StyledSection } from "./Projects.styles";
import { projects } from "../../utils/projects";
import { Project } from "../Project";

export const Projects: FC = () => {
    return (
        <StyledSection id="projects">
            <h2>Projects</h2>
            <p>
                These are some of the projects I built to practice and get
                better at the technologies mentioned above.
            </p>
            <div className="container">
                <ul className="projects__list">
                    {projects.map((project, i) => (
                        <Project key={i} {...project} />
                    ))}
                </ul>
            </div>
        </StyledSection>
    );
};
