import styled from "styled-components";

import { Link as RouterLink } from "react-router-dom";
export const SHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--blue);
    color: var(--white);
    height: 80px;
`;

export const Logo = styled.h1`
    font-size: 2rem;
    text-align: center;
`;
export const NavBar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Link = styled(RouterLink)`
    margin-right: 1rem;
`;
