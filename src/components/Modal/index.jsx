import React from "react";
import { createPortal } from "react-dom";
import { CloseButton, ModalContainer, ModalHeader, Overlay } from "./styles";
export default Modal = ({
    children,
    width,
    height,
    minHeight,
    onClose,
    isOpen,
    handleClose,
    title = "",
}) => {
    if (!isOpen) {
        return null;
    }
    let Title =
        title.length > 0 ? (
            <ModalHeader>
                <h3>{title}</h3>
            </ModalHeader>
        ) : null;
    return createPortal(
        <>
            <Overlay>
                <ModalContainer
                    width={width}
                    minHeight={minHeight}
                    height={height}
                >
                    {Title}
                    {children}
                    <CloseButton onClick={() => handleClose()}>
                        Close
                    </CloseButton>
                </ModalContainer>
            </Overlay>
        </>,
        document.getElementById("portal")
    );
};
