import { useDispatch } from "react-redux";
import { removeGrade } from "../../actions";

export default GradeSlot = ({ grade, percentage, uuid }) => {
  const dispatch = useDispatch();
  const handleRemove = (uuid) => {
    dispatch(removeGrade({ uuid }));
  };
  return (
    <div>
      <p key={uuid}>
        {grade} - {percentage}% - {uuid}
        <button onClick={() => handleRemove(uuid)}>❌</button>
      </p>
    </div>
  );
};
