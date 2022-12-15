import React, {FC} from 'react'
import { AiOutlineFilePdf } from "react-icons/ai";
import {StyledResume} from "./Resume.styles"

export const Resume: FC = () => {
  return (
    <StyledResume href={require("../../documents/ShadrinaEO.pdf")} target="_blank">
        <figure aria-hidden="true">
        <AiOutlineFilePdf className="resume__icon"/>
      </figure>
    </StyledResume>
  )
}
