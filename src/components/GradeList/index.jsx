import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGrade, clearList } from '../../actions';
import { Form, ButtonContainer, Button } from './styles';
import GradeSlot from '../GradeSlot';
import {
    getFinalScore,
    isTotalPercentageCorrect,
} from '../../utils/calculations';
export default GradegradeList = () => {
    const gradeList = useSelector((state) => state.gradeList);
    const dispatch = useDispatch();
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
        if (!isTotalPercentageCorrect({ grades: gradeList })) {
            //add logic for percentage error
            return;
        } else {
            //if 100 get final, otherwise, calc the remaining
        }
        const finalScore = getFinalScore({ grades: gradeList });
        alert(finalScore);
        /* make the calculations */
    };
    return (
        <Fragment>
            <Form onSubmit={handleClickSubmit}>
                {gradeList.length > 0 ? (
                    gradeList.map((item) => {
                        return <GradeSlot {...item} key={item.uuid} />;
                    })
                ) : (
                    <p>How empty... 🦗🦗🦗</p>
                )}
                <ButtonContainer>
                    <Button type="button" onClick={handleClickReset}>
                        Reset List
                    </Button>
                    <Button type="button" onClick={handleClickAdd}>
                        Add a term
                    </Button>
                    <Button type="submit">Calc 🧮</Button>
                </ButtonContainer>
            </Form>
        </Fragment>
    );
};
