import { useRef } from 'react';
import styled from 'styled-components';
import { HiPlusSm } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addGrade, clearList } from '../../actions';
import { removeGrade, updateGrade } from '../../actions';
export default GradeSlot = ({ name, grade, percentage, uuid }) => {
    const firstInputRef = useRef();
    const dispatch = useDispatch();
    const handleRemove = (uuid) => {
        dispatch(removeGrade({ uuid }));
    };
    const handleChange = (e) => {
        const { value, id: field } = e.target;
        console.log(value, field);
        dispatch(updateGrade({ value, field, uuid }));
    };
    /**
  const handleChangeGrade = (e) => {
    setGrade(e.target.value);
  };
  const handleChangePercentage = (e) => {
    setPercentage(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target);
  }; */
    return (
        <Slot key={uuid}>
            <Input
                required
                id="name"
                aria-label="Name Of Slot input"
                type="text"
                onChange={handleChange}
                placeholder="Name of the slot..."
                value={name}
            />
            <Input
                required
                id="grade"
                aria-label="Grade input"
                type="text"
                onChange={handleChange}
                placeholder="Grade"
                value={grade}
            />
            <Input
                required
                id="percentage"
                aria-label="Percentage input"
                type="text"
                onChange={handleChange}
                placeholder="%"
                value={percentage}
            />
            <a onClick={() => dispatch(addGrade())}>
                <AddIcon />
            </a>
            <a type="button" onClick={() => handleRemove(uuid)}>
                <DeleteIcon />
            </a>
        </Slot>
    );
};

const Slot = styled.div`
    padding: 0.5rem 1.25rem;
    background-color: #3590f3;
    display: grid;
    align-items: center;
    grid-template-columns:
        minmax(145px, 400px) repeat(2, minmax(25px, 60px))
        repeat(2, 45px);
    column-gap: 0.25rem;
    &:hover,
    &:focus-within {
        background-color: var(--active-blue);
    }
`;

const Input = styled.input`
    height: 25px;
    padding: 1px 10px;
    border: none;
    border-radius: 24px;
    background-color: #e5efff;
`;

const AddIcon = styled(HiPlusSm)`
    margin-inline: auto;
    cursor: pointer;
    color: var(--white);
`;
const DeleteIcon = styled(MdDelete)`
    margin-inline: auto;
    cursor: pointer;
    color: var(--white);
`;
