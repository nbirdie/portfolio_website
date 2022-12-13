import { createGlobalStyle } from "styled-components";
import { baseTheme } from "./theme";

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
        margin: 0 auto;
        line-height: 1.5;
        //by default font is 1rem
        font-size: 1rem;
    }
    body {
        margin: 0 auto;
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
    h2 {
        position: relative;
        font-size: 2.5rem;
        padding-bottom: 1.5rem;
        &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 1.3rem;
            left: 0;
            right: 0;
            height: 0.1rem;
            width: 45%;
            margin-right: auto;
            margin-left: auto;
            background-color: ${baseTheme.colors.btBlue};
        }
        
    }
    h3 {
        font-size: 1.5rem;
        padding-bottom: 1.5rem;
    }
    h5 {
        font-size: 1.2rem;
        
    }
    p {
        font-size: 1rem;
        line-height: 1.5;
    }
    button {
        border: none;
    }
    a {
        display: block;
        width: max-content;
        cursor: pointer;
        color: inherit;
        &:hover {
            opacity: 0.8;
        }
    }
    ul {
        list-style: none;
    }
    li {
        font-size: 1rem;
    }
    .container {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
        margin: 0 auto;
        max-width: 1200px;
        align-items: center;
    }
    .btn {
        padding: 0.6rem 1.8rem 0.7rem;
        text-decoration: none;
        border-radius: 40px;
    }
    .technologies{
        &__list{
            display: flex;
            align-items:center;
            justify-content:start;
            flex-flow: row wrap;
            gap: 1rem;
        }
        &__item {
            padding: 0.2rem 1.8rem 0.2rem;
            background: rgba(156, 152, 152, 0.2);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(3.5px);
            -webkit-backdrop-filter: blur(3.5px);
            border: 1px solid rgba(156, 152, 152, 0.18);
            border-radius: 40px;
        }
    }
`;
