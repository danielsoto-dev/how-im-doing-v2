import { useRef } from "react";
import { IconContext } from "react-icons/lib";
import { useDispatch, useSelector } from "react-redux";
import { addGrade } from "../../actions";
import { IconButton, AddIcon, DeleteIcon, Slot, Input } from "./styles";
import { removeGrade, updateGrade } from "../../actions";
import {
    isValidNumber,
    isValidPercentage,
} from "../../utils/field-validations";
import { toastConfig, notifyError } from "../../utils/toast-utils";
export default GradeSlot = ({ name, grade, percentage, uuid }) => {
    const dispatch = useDispatch();
    const toastId = useRef(null);
    const maxGrade = useSelector((state) => state.config.maxGrade);
    const handleRemove = () => {
        dispatch(removeGrade({ uuid }));
    };
    const handleAdd = () => {
        dispatch(addGrade());
    };
    const handleChange = (e) => {
        e.preventDefault();
        const { value, id: field } = e.target;
        let isValid = true;
        let errorMsm = "";
        switch (field) {
            case "percentage":
                if (!isValidPercentage(value)) {
                    isValid = false;
                    errorMsm = "The percentage must be a number";
                }
                break;
            case "grade":
                if (Number(value) > maxGrade) {
                    isValid = false;
                    errorMsm = `The grade must be less or equal to ${maxGrade}`;
                    break;
                }
                if (!isValidNumber(value)) {
                    isValid = false;
                    errorMsm = "The grade must be a number";
                }
                break;
            default:
                break;
        }
        if (isValid) {
            dispatch(updateGrade({ value, field, uuid }));
        } else {
            notifyError({ errorMsm, toastConfig, toastId });
        }
    };
    const handleOnFocusPercentage = ({ target: { value, id: field } }) => {
        value = value.replace("%", "");
        dispatch(updateGrade({ value, field, uuid }));
    };
    const handleOnBlurPercentage = ({ target: { value, id: field } }) => {
        if (!value.includes("%")) {
            value = `${value}%`;
        }
        dispatch(updateGrade({ value, field, uuid }));
    };
    return (
        <Slot key={uuid}>
            <Input
                id="name"
                aria-label="Name Of Slot input"
                type="text"
                onChange={handleChange}
                placeholder="Name of the slot..."
                value={name}
            />
            <Input
                required
                id="grade"
                aria-label="Grade input"
                type="text"
                onChange={handleChange}
                placeholder="Grade"
                value={grade}
            />
            <Input
                required
                id="percentage"
                aria-label="Percentage input"
                type="text"
                onChange={handleChange}
                placeholder="%"
                value={percentage}
                onFocus={handleOnFocusPercentage}
                onBlur={handleOnBlurPercentage}
            />
            <IconContext.Provider value={{ style: { fontSize: "24px" } }}>
                <IconButton type="button" onClick={handleAdd}>
                    <AddIcon />
                </IconButton>
                <IconButton type="button" onClick={handleRemove}>
                    <DeleteIcon />
                </IconButton>
            </IconContext.Provider>
        </Slot>
    );
};
