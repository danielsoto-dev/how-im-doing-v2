import { toast } from "react-toastify";
export const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};
export const toastConfigMobile = {
    position: "bottom",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};
export const notifyError = ({ errorMsm, toastConfig, toastId }) => {
    if (!toast.isActive(toastId.current)) {
        toastId.current = toast.warn(errorMsm, toastConfig);
    }
};
