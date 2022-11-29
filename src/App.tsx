import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { GlobalStyle, baseTheme } from "./styles";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
    return (
        <ThemeProvider theme={baseTheme}>
            <GlobalStyle />
            <Navbar />
            <Header />
            <AboutMe/>
            <Projects />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
