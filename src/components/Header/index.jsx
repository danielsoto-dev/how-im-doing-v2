import { useState } from "react";
import { SHeader, Logo, NavBar, Link } from "./styles";
import Modal from "../../components/Modal";
import ConfigForm from "../ConfigForm";
export default Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <SHeader>
                <Link to="/">
                    <Logo className="title">HowI'mDoing</Logo>
                </Link>
                <NavBar>
                    <Link to="/">Calculator</Link>
                    <Link to="/AboutMe">About the Dev</Link>
                    <Link to="/" onClick={() => openModal()}>
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
