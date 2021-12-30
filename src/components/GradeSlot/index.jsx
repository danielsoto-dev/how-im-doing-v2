import { IconContext } from 'react-icons/lib';
import { useDispatch } from 'react-redux';
import { addGrade } from '../../actions';
import { IconButton, AddIcon, DeleteIcon, Slot } from './styles';
import { removeGrade, updateGrade } from '../../actions';
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
        console.log(value, field);
        dispatch(updateGrade({ value, field, uuid }));
    };
    return (
        <Slot key={uuid}>
            <Input
                required
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
