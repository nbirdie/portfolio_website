import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, baseTheme, lightTheme } from "./styles"
import { AboutMe, Header, Navbar, Projects, Footer, Resume } from "./components";


function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <ThemeProvider theme={darkMode ? baseTheme : lightTheme}>
            <GlobalStyle />
            <Navbar />
            <Header />
            <AboutMe/>
            <Projects />
            <Resume />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
