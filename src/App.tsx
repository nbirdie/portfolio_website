import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, baseTheme } from "./styles"
import { AboutMe, Header, Navbar, Projects, Footer } from "./components";


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
