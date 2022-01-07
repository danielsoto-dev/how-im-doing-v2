import { Form, Input, Label, SaveIcon } from "./styles";
import Button from "../Button";
export default ConfigForm = () => {
    return (
        <Form>
            <Label>Nota deseada:</Label>
            <Input />
            <Label>Nota maxima:</Label>
            <Input />
            <Button modifier="cancel">Cancel</Button>
            <Button type="submit">
                Save <SaveIcon />
            </Button>
        </Form>
    );
};
