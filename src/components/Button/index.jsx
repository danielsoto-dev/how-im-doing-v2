import React from "react";
import { StyledButton } from "./styles";
export default Button = ({ children, modifier, ...props }) => {
    return (
        <StyledButton modifier={modifier} {...props}>
            {children}
        </StyledButton>
    );
};
