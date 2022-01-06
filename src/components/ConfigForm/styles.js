import styledComponents from "styled-components";
import styled from "styled-components";

export const Form = styled.form`
    display: grid;
    grid-template-columns: 300px 5ch;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: max(1fr, 20px) 5ch;
`;
export const Button = styled.button``;
export const Label = styled.label``;
export const Input = styled.input`
    height: 25px;
    padding: 1px 10px;
    border: none;
    /* border-radius: 24px; */
    transition: background-color 300ms;
    background-color: #e5efff;
    &:focus {
        transition: background-color 200ms;
        background-color: var(--white);
    }
`;
