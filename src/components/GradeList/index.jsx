import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGrade, clearList } from "../../actions";
import { Form, ButtonContainer } from "./styles";
import Button from "../Button";
import GradeSlot from "../GradeSlot";
import { isTotalPercentageCorrect } from "../../utils/calculations";
export default GradeList = ({ openModal }) => {
    const [disableSubmit, setDisableSubmit] = useState(false);
    const gradeList = useSelector((state) => state.gradeList);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!isTotalPercentageCorrect({ grades: gradeList })) {
            setDisableSubmit(true);
            return;
        }
        setDisableSubmit(false);
    }, [gradeList]);
    const handleClickAdd = (e) => {
        e.preventDefault();
        dispatch(addGrade());
    };
    const handleClickReset = (e) => {
        e.preventDefault();
        dispatch(clearList());
    };
    const handleClickSubmit = (e) => {
        e.preventDefault();

        openModal();
        // alert(finalScore);
        /* make the calculations */
    };

    return (
        <Fragment>
            <Form onSubmit={handleClickSubmit}>
                {gradeList.length > 0 ? (
                    gradeList.map(({ grade, percentage, uuid, name }) => {
                        return (
                            <GradeSlot
                                percentage={percentage}
                                grade={grade}
                                name={name}
                                uuid={uuid}
                                key={uuid}
                            />
                        );
                    })
                ) : (
                    <p>How empty... 🦗🦗🦗</p>
                )}
                <ButtonContainer>
                    <Button type="button" onClick={handleClickReset}>
                        Reset List
                    </Button>
                    <Button type="button" onClick={handleClickAdd}>
                        Add a Grade
                    </Button>
                    <Button type="submit" disabled={disableSubmit}>
                        Submit
                    </Button>
                </ButtonContainer>
            </Form>
        </Fragment>
    );
};
