import { useState } from "react";
import GradeList from "../../components/GradeList";
import { Wrapper, GradesContainer } from "./styles";
import Result from "../../components/Result";
import Modal from "../../components/Modal";
export default Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <Wrapper>
            <GradesContainer>
                <h2>Type your grades! 📚</h2>
                <h3>Let's start!</h3>
                <GradeList openModal={openModal} />
                <Modal
                    isOpen={isModalOpen}
                    handleClose={closeModal}
                    title="Result"
                >
                    <Result />
                </Modal>
            </GradesContainer>
        </Wrapper>
    );
};
