import { useState, useRef } from 'react';
import { IconContext } from 'react-icons/lib';
import { useDispatch } from 'react-redux';
import { addGrade } from '../../actions';
import { IconButton, AddIcon, DeleteIcon, Slot, Input } from './styles';
import { removeGrade, updateGrade } from '../../actions';
export default GradeSlot = ({ name, grade, percentage, uuid }) => {
    const ref = useRef(null);
    const [errors, setErrors] = useState({
        name: false,
        percentage: false,
        grade: false,
    });
    const dispatch = useDispatch();
    //handle by de Slot
    const handleRemove = () => {
        dispatch(removeGrade({ uuid }));
    };
    const handleAdd = () => {
        dispatch(addGrade());
    };
    //handle by the childs
    const handleChange = (e) => {
        const { value, id: field, validity } = e.target;
        const isNewValueValid = !validity.patternMismatch;
        if (errors[field] && isNewValueValid) {
            const newErrorState = { ...errors };
            newErrorState[field] = false;
            setErrors(newErrorState);
        }
        dispatch(updateGrade({ value, field, uuid }));
    };
    const handleOnBlur = ({ target: { value, id: field, validity } }) => {
        if (validity.patternMismatch) {
            const newErrorsState = { ...errors };
            newErrorsState[field] = true;
            setErrors(newErrorsState);
        }
        dispatch(updateGrade({ value, field, uuid }));
    };
    // const handleOnFocus= ({ target: { value, id: field } }) => {
    //     const hasPercentageSymbol = value.includes('%');
    //     if (hasPercentageSymbol) {
    //         value = value.replace('%', '');
    //     }

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
                error={errors['name']}
            />
            <Input
                required
                id="grade"
                aria-label="Grade input"
                type="text"
                onChange={handleChange}
                placeholder="Grade"
                value={grade}
                //validate for decimals
                pattern="^[0-9]*"
                onBlur={handleOnBlur}
                error={errors['grade']}
            />
            <Input
                required
                id="percentage"
                aria-label="Percentage input"
                type="text"
                onChange={handleChange}
                placeholder="%"
                value={percentage}
                pattern="^[0-9]*%?$"
                // onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                error={errors['percentage']}
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
