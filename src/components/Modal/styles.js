import styled from "styled-components";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;
// Make this configurable by props
export const ModalContainer = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px Opx;
    padding: 20px;
`;
export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    /* width: 30px;
    height: 30px; */
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s ease all;
    border-radius: 5px;
    color: #1766dc;
    &:hover {
        background-color: #f2f2f2;
    }
`;
