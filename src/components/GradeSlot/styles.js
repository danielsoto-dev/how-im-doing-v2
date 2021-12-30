import styled from 'styled-components';
import { HiPlusSm } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
export const Slot = styled.div`
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
    &:focus {
        background-color: var(--white);
    }
`;

export const AddIcon = styled(HiPlusSm)`
    margin-inline: auto;
    cursor: pointer;
    color: var(--white);
`;
export const DeleteIcon = styled(MdDelete)`
    margin-inline: auto;
    cursor: pointer;
    color: var(--white);
`;

export const IconButton = styled.button`
    background-color: transparent;
    border: none;
`;
