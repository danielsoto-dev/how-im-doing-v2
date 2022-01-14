import Header from "./components/Header";
import Main from "./Views/Main";
import About from "./Views/About";
import Footer from "./components/Footer";
import { Fragment } from "react";
import { GlobalStyle } from "../globalStyles";
import { Routes, Route } from "react-router-dom";
export const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </Fragment>
    );
};
