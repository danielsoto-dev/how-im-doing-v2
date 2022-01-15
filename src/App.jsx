import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./Views/Main";
import About from "./Views/About";
import { Fragment } from "react";
import { GlobalStyle, Wrapper } from "./globalStyles";
import { Routes, Route } from "react-router-dom";
export const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Header />
            <Wrapper>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </Wrapper>
            <Footer />
        </Fragment>
    );
};
