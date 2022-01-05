import { IconContext } from 'react-icons/lib';
import { useDispatch } from 'react-redux';
import { addGrade } from '../../actions';
import { IconButton, AddIcon, DeleteIcon, Slot, Input } from './styles';
import { removeGrade, updateGrade } from '../../actions';
import {
    isValidNumber,
    isValidPercentage,
} from '../../utils/field-validations';
export default GradeSlot = ({ name, grade, percentage, uuid }) => {
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeGrade({ uuid }));
    };
    const handleAdd = () => {
        dispatch(addGrade());
    };
    const handleChange = (e) => {
        const { value, id: field } = e.target;
        let isValid = true;
        switch (field) {
            case 'percentage':
                if (!isValidPercentage(value)) {
                    isValid = false;
                }
                break;
            case 'grade':
                if (!isValidNumber(value)) {
                    isValid = false;
                }
                break;
            default:
                break;
        }
        if (isValid === true) {
            dispatch(updateGrade({ value, field, uuid }));
        }
    };
    const handleOnBlurPercentage = ({ target: { value, id: field } }) => {
        if (!value.includes('%')) {
            value = `${value}%`;
        }
        dispatch(updateGrade({ value, field, uuid }));
    };
    // const handleOnFocusPercentage = ({ target: { value, id: field } }) => {
    //     const hasPercentageSymbol = value.includes('%');
    //     if (hasPercentageSymbol) {
    //         value = value.replace('%', '');
    //     }
    //     dispatch(updateGrade({ value, field, uuid }));
    // };
    return (
        <Slot
            key={uuid}
            // className={shake ? 'shake' : false}
            // onAnimationEnd={() => setShake(false)}
        >
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
                // onFocus={handleOnFocusPercentage}
                onBlur={handleOnBlurPercentage}
                // isValid={isValidPercentage(percentage)} // false or true
            />
            <IconContext.Provider value={{ style: { fontSize: '1.5rem' } }}>
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
