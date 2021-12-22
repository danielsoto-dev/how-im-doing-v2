import { Header } from "./components/Header";
import { Main } from "./Views/Main";
import { Footer } from "./components/Footer";
import { Fragment } from "react";
export const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};
