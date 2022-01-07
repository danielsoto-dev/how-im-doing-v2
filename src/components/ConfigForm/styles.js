import styled from "styled-components";
import { IoMdSave } from "react-icons/io";
import Button from "../Button";
export const Form = styled.form`
    display: grid;
    padding: 2rem;
    gap: 20px;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(1fr, 3);
`;

export const Label = styled.label`
    justify-self: center;
`;
export const Input = styled.input`
    height: 25px;
    padding: 1px 10px;
    border: none;
    max-width: 7ch;
    justify-self: center;
    transition: background-color 300ms;
    background-color: #e5efff;
    &:focus {
        transition: background-color 200ms;
        background-color: var(--white);
    }
`;

export const SaveIcon = styled(IoMdSave)`
    display: inline;
    flex-shrink: 0;
    margin-left: 1rem;
`;
export const FormButton = styled(Button)`
    grid-column: span 2;
    justify-self: center;
    border-bottom: 1px solid var(--dark);
`;
