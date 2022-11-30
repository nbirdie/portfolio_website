import {createGlobalStyle} from "styled-components"
import { baseTheme } from "./theme"

//These styles ensure that there is no margin or padding on the page, except in places where they are explicitly stated
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif; 

    }
    #root{
        margin:0 auto;
    }

    html{
        scroll-behavior: smooth;
        background-color: ${baseTheme.colors.bgMain};
        color: ${baseTheme.colors.font1};
        max-width: 1280px;
        margin: 0 auto;
        padding-right: 2rem;
        padding-left: 2rem;
    }
    body {
        max-width: 1280px;
        min-width: 320px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        letter-spacing: 0.1rem;
    }
    button {
        border: none;
    }
    a {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
    ul {
        list-style: none;
    }
    .container {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .btn {
        padding: 0.7rem 1.8rem 0.8rem;
        text-decoration: none;
        border-radius: 40px;
    }
`