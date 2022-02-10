import { Fragment, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGrade, clearList } from "../../actions";
import { Form, ButtonContainer } from "./styles";
import Button from "../Button";
import GradeSlot from "../GradeSlot";
import { isTotalPercentageCorrect } from "../../utils/calculations";
import { toastConfig, notifyError } from "../../utils/toast-utils";

let TOTAL_PERCENTAGE_ERROR_MSM = "The total percentage must be 100% or less";

export default GradeList = ({ openModal }) => {
    const [disableSubmit, setDisableSubmit] = useState(false);
    const toastId = useRef(null);
    const gradeList = useSelector((state) => state.gradeList);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!isTotalPercentageCorrect({ grades: gradeList })) {
            setDisableSubmit(true);
            notifyError({
                errorMsm: TOTAL_PERCENTAGE_ERROR_MSM,
                toastConfig,
                toastId,
            });
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
