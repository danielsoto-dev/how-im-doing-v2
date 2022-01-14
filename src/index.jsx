import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./App";
const rootElement = document.getElementById("root");
import { BrowserRouter } from "react-router-dom";
render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </StrictMode>,
    rootElement
);
