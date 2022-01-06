import React from "react";
import { CloseButton, ModalContainer, ModalHeader, Overlay } from "./styles";
export default Modal = ({
    children,
    width,
    height,
    minHeight,
    onClose,
    isOpen,
    handleClose,
    title,
}) => {
    if (!isOpen) {
        return null;
    }
    return (
        <>
            <Overlay>
                <ModalContainer
                    width={width}
                    minHeight={minHeight}
                    height={height}
                >
                    <ModalHeader>
                        <h3>{title}</h3>
                    </ModalHeader>
                    {children}
                    <CloseButton onClick={() => handleClose()}>
                        Close
                    </CloseButton>
                </ModalContainer>
            </Overlay>
        </>
    );
};
