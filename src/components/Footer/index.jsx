import { SFooter, FooterGrid } from "./styles";
import { Link } from "react-router-dom";
export default Footer = () => {
    return (
        <SFooter>
            <FooterGrid>
                <span>Terminos y Condiciones</span>
                <span>
                    Develop by:{" "}
                    <strong>
                        <Link to="/">Daniel Soto</Link>
                    </strong>
                </span>
            </FooterGrid>
        </SFooter>
    );
};