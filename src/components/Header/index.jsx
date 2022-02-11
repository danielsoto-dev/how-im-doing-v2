import { useState } from "react";
import { SHeader, Logo, NavBar, Link, BurgerButton, MenuIcon } from "./styles";
import Modal from "../../components/Modal";
import ConfigForm from "../ConfigForm";
export default Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleNavBarClick = () => {
        setIsMenuOpen(false);
    };
    return (
        <>
            <SHeader>
                <Link to="/">
                    <Logo className="title">HowI'mDoing</Logo>
                </Link>
                <BurgerButton onClick={toggleMenu}>
                    <MenuIcon />
                </BurgerButton>

                <NavBar isOpen={isMenuOpen} onClick={handleNavBarClick}>
                    <Link to="/">Calculator</Link>{" "}
                    <Link to="/" onClick={openModal}>
                        Config
                    </Link>
                    <Link to="/about">About</Link>
                </NavBar>
            </SHeader>
            <Modal
                isOpen={isModalOpen}
                handleClose={closeModal}
                title={"Config"}
            >
                <ConfigForm closeModal={closeModal} />
            </Modal>
        </>
    );
};
