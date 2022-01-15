import { useState } from "react";
import { isValidNumber } from "../../utils/field-validations";
import { Form, Input, Label, SaveIcon, FormButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
// import Button from "../Button";
import { updateConfig } from "../../actions";
export default ConfigForm = ({ closeModal }) => {
    const dispatch = useDispatch();
    const { desiredGrade: initialDesiredGrade, maxGrade: initialMaxGrade } =
        useSelector((state) => state.config);
    const [desiredGrade, setDesiredGrade] = useState(+initialDesiredGrade);
    const [maxGrade, setMaxGrade] = useState(+initialMaxGrade);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            updateConfig({
                config: {
                    desiredGrade,
                    maxGrade,
                },
            })
        );
        closeModal();
    };
    const handleChangeDesiredGrade = (e) => {
        const { value } = e.target;
        if (isValidNumber(value)) {
            setDesiredGrade(value);
        }
    };
    const handleChangeMaxGrade = (e) => {
        const { value } = e.target;
        if (isValidNumber(value)) {
            setMaxGrade(value);
        }
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor="desiredGrade">Desired Grade:</Label>
            <Input
                id="desiredGrade"
                type="text"
                inputMode="numeric"
                onChange={handleChangeDesiredGrade}
                value={desiredGrade}
            />
            <Label htmlFor="maxGrade">Maximun Grade:</Label>
            <Input
                id="maxGrade"
                type="text"
                inputMode="numeric"
                onChange={handleChangeMaxGrade}
                value={maxGrade}
            />
            <FormButton onClick={handleSubmit}>
                Save <SaveIcon />
            </FormButton>
        </Form>
    );
};
