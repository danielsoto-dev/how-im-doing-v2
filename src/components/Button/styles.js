import styled from "styled-components";

const getFontColor = ({ modifier = "", isHover = false }) => {
    modifier = modifier.toLowerCase();
    if (modifier === "primary") {
        return "var(--dark)";
    }
    if (modifier === "cancel") {
        return "var(--white)";
    }
    return "var(--dark)";
};
const getBgColor = ({ modifier = "", isHover = false }) => {
    modifier = modifier.toLowerCase();
    let bgColor = !isHover ? "var(--white)" : "var(--darker-white)";
    if (modifier === "primary") {
        bgColor = !isHover ? "var(--white)" : "var(--darker-white)";
    }
    if (modifier === "cancel") {
        bgColor = !isHover ? "var(--red)" : "var(--darker-red)";
    }
    return bgColor;
};
export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 0.75rem;
    background-color: ${({ modifier }) => getBgColor({ modifier })};
    color: ${({ modifier }) => getFontColor({ modifier })};
    cursor: pointer;
    font-weight: bold;
    border: none;
    transition: background-color 400ms;
    &:hover,
    &:focus {
        //Make this configurable
        color: ${({ modifier }) => getFontColor({ modifier, isHover: true })};
        background-color: ${({ modifier }) =>
            getBgColor({ modifier, isHover: true })};
        transition: background-color 200ms;
    }
    &:disabled {
        transition: 200ms text-decoration;
        text-decoration: line-through;
    }
    /* grid-column: span 2; */
`;
