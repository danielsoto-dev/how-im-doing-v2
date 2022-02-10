import { useState } from "react";
import { SHeader, Logo, NavBar, Link, BurgerButton } from "./styles";
import Modal from "../../components/Modal";
import ConfigForm from "../ConfigForm";
export default Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <SHeader>
                <Link to="/">
                    <Logo className="title">HowI'mDoing</Logo>
                </Link>
                <BurgerButton onClick={openMenu}>icono</BurgerButton>

                <NavBar isOpen={isMenuOpen}>
                    <Link to="/">Calculator</Link>
                    <Link to="/about">About</Link>
                    <Link to="/" onClick={openModal}>
                        Config
                    </Link>
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
