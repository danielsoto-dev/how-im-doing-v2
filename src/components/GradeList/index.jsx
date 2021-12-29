import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGrade, clearList } from '../../actions';
import styled from 'styled-components';
import GradeSlot from '../GradeSlot';
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
        console.log('The current state is: ', gradeList);
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
                    <button type="button" onClick={handleClickAdd}>
                        Add a term
                    </button>
                    <button type="button" onClick={handleClickReset}>
                        Reset List
                    </button>
                    <button type="submit">Calc 🧮</button>
                </ButtonContainer>
            </Form>
        </Fragment>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.05rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-inline: auto;
    margin-top: 1rem;
`;
