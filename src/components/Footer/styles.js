import styled from "styled-components";

import { Link as RouterLink } from "react-router-dom";
import { underlineAnimation } from "../../globalStyles";
export const Link = styled(RouterLink)`
    ${underlineAnimation}
`;
export const SFooter = styled.footer`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--white);
    background-color: var(--blue);
    bottom: 0;
`;
