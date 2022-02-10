import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";
import { Link as RouterLink } from "react-router-dom";
export const SHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--blue);
    color: var(--white);
    height: 80px;
`;
export const MenuIcon = styled(IoMdMenu)`
    cursor: pointer;
    color: var(--white);
    font-size: 35px;
`;

export const Logo = styled.h1`
    font-size: 2rem;
    text-align: center;
    @media (max-width: 560px) {
        font-size: 1.5rem;
    }
`;
export const NavBar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 960px;
    @media (max-width: 560px) {
        flex-direction: column;
        display: ${(props) => (props.isOpen ? "flex" : "none")};
        position: fixed;
        inset: 80px 0 80px 0;
        background-color: var(--white);
        color: var(--dark);
        overflow-y: scroll;
        z-index: 1;
    }
`;

// a hamburguer menu button in styled components
export const BurgerButton = styled.button`
    display: none;
    background: transparent;
    border: none;
    @media (max-width: 560px) {
        display: block;
    }
`;

export const Link = styled(RouterLink)`
    margin-right: 1rem;
    &::after {
        opacity: 1;
        transform: translate3d(-100%, 0, 0);
    }

    &:hover::after,
    &:focus::after {
        transform: translate3d(0, 0, 0);
    }
`;
