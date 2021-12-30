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

const Button = styled.button`
    padding: 0.4rem 0.75rem;
    background-color: var(--white);
    color: #000;
    cursor: pointer;
    outline: none;
    font-weight: bold;
    border: none;
    anim &:hover,
    &:focus {
        box-shadow: 0px 0px 0px 1px black;
    }
`;
