import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeSvg from "../../assets/svg/HomeSvg";
import GradeList from "../../components/GradeList";
import { Wrapper, GradesContainer, MainTitle } from "./styles";
import { addGrade } from "../../actions";
import Result from "../../components/Result";
import Modal from "../../components/Modal";
export default Main = () => {
    const gradeList = useSelector((state) => state.gradeList);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleAddGrade = () => {
        dispatch(addGrade());
    };
    return (
        <Wrapper>
            <GradesContainer>
                <MainTitle>Type your grades! 📚</MainTitle>

                {gradeList.length > 0 ? (
                    <GradeList openModal={openModal} />
                ) : (
                    <>
                        <Button
                            style={{ marginBottom: "100px" }}
                            onClick={handleAddGrade}
                        >
                            Click me to start!
                        </Button>
                        <HomeSvg width="400px" />
                    </>
                )}
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
