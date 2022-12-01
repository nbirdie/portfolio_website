import React from "react";
import { FC } from "react";
import { technologies } from "../../utils/technologies";

export const Technologies: FC = () => {
    return (
        <>
            <h3>Skills and Technologies</h3>
            <ul className="technologies__list">
                {technologies.map((tech, i) => (
                    <li key={i} className="technologies__item">
                        {tech}
                    </li>
                ))}
            </ul>
        </>
    );
};
