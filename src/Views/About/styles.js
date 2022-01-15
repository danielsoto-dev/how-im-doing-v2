import styled from "styled-components";

export const AboutText = styled.p`
    line-height: 1.75rem;
    text-align: center;
`;
export const AboutContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 600px;
`;

const highligthStyles = ` &::selection {
        color: var(--dark);
        background: var(--active-blue); /* WebKit/Blink Browsers */
    }`;
export const ContactLink = styled.a`
    color: var(--blue);
    text-decoration: underline;
    ${highligthStyles}
`;
export const Name = styled.span`
    color: var(--blue);
    font-weight: bold;
    ${highligthStyles}
`;
