import styled from "styled-components";

import Modal from "../../components/Modal";
import { useState } from "react";
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis reprehenderit voluptatem blanditiis laudantium
                eligendi, quae deserunt explicabo consequatur nesciunt. Tempore!
            </Modal>
        </>
    );
};

const SHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--blue);
    color: var(--white);
    height: 80px;
`;

const Logo = styled.h1`
    font-size: 2rem;
    text-align: center;
`;
const NavBar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
