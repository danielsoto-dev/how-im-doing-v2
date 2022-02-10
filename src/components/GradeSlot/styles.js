import styled from "styled-components";
import { HiPlusSm } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

export const Slot = styled.div`
    padding: 0.5rem 1.25rem;
    background-color: #3590f3;
    display: grid;
    align-items: center;
    grid-template-columns:
        minmax(145px, 300px) repeat(2, minmax(5ch, 80px))
        repeat(2, minmax(30px, 35px));
    column-gap: 0.25rem;
    //Exit duration
    transition: background-color 300ms;
    &:hover,
    &:focus-within {
        //Enter duration
        transition: background-color 200ms;
        background-color: var(--active-blue);
    }
`;

export const Input = styled.input`
    height: 25px;
    padding: 1px 10px;
    border: none;
    border-radius: 24px;
    transition: background-color 300ms;
    background-color: #e5efff;
    &:focus {
        transition: background-color 200ms;
        background-color: var(--white);
    }
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
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
