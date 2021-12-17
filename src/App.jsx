import { render } from "react-dom";
import Header from "./components/Header";
import Main from "./Views/Main";
const rootElement = document.getElementById("root");
export const App = () => {
  return (
    <div>
      <Header></Header>
      <Main />
    </div>
  );
};

render(<App />, rootElement);
