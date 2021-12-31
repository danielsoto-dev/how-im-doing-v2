import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.05rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-inline: auto;
    margin-top: 1rem;
`;

export const Button = styled.button`
    padding: 0.4rem 0.75rem;
    background-color: var(--white);
    color: #000;
    cursor: pointer;
    outline: none;
    font-weight: bold;
    border: none;
    transition: background-color 400ms;
    &:hover,
    &:focus {
        /* box-shadow: 0px 0px 0px 1px black; */
        color: var(--white);
        background: var(--active-blue);
        transition: background-color 200ms;
    }
`;
