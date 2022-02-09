import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./App";
const rootElement = document.getElementById("root");
import { BrowserRouter } from "react-router-dom";
let BASENAME;
if (process.env.NODE_ENV === "development") {
    BASENAME = "/";
} else {
    BASENAME = "/how-im-doing-v2";
}
render(
    <StrictMode>
        <BrowserRouter basename={BASENAME}>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </StrictMode>,
    rootElement
);
