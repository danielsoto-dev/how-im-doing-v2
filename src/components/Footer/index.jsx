import { SFooter } from "./styles";
import { Link } from "react-router-dom";
export default Footer = () => {
    return (
        <SFooter>
            <p>
                Designed and Developed by:{" "}
                <strong>
                    <Link to="/">Daniel Soto 🎩</Link>
                </strong>
            </p>
        </SFooter>
    );
};
