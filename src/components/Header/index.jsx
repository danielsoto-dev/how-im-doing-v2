import Modal from "../../components/Modal";
import { SHeader, Logo, NavBar } from "./styles";
import { useState } from "react";
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
                <a href="/">
                    <Logo className="title">HowI'mDoing</Logo>
                </a>
                <NavBar>
                    <a href="#" onClick={() => openModal()}>
                        Config
                    </a>
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
