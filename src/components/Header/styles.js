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
    max-width: 960px;
    @media (max-width: 560px) {
        flex-direction: column;
        display: ${(props) => (props.isOpen ? "flex" : "none")};
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--white);
        color: var(--dark);
        overflow-y: scroll;
        z-index: 1;
    }
`;

// a hamburguer menu button in styled components
export const BurgerButton = styled.button`
    display: none;

    @media (max-width: 560px) {
        display: block;
    }
`;

export const Link = styled(RouterLink)`
    margin-right: 1rem;
`;
