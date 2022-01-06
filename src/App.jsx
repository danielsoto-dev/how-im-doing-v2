import Header from "./components/Header";
import Main from "./Views/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { Fragment } from "react";
import { GlobalStyle } from "./Views/Main/globalStyles";
export const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Header />
            <Main />
            <Footer />
            <Modal />
        </Fragment>
    );
};
