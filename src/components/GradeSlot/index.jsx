import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeGrade } from "../../actions";
export default GradeSlot = ({
  grade: initialGrade,
  percentage: initialPercentage,
  uuid,
}) => {
  const [grade, setGrade] = useState(initialGrade);
  const [percentage, setPercentage] = useState(initialPercentage);
  const dispatch = useDispatch();
  const handleRemove = (uuid) => {
    dispatch(removeGrade({ uuid }));
  };
  const handleChangeGrade = (e) => {
    setGrade(e.target.value);
  };
  const handleChangePercentage = (e) => {
    setGrade(e.target.value);
  };
  return (
    <div>
      <div key={uuid}>
        <input
          aria-label="Grade input"
          type="text"
          value={grade}
          onChange={handleChangeGrade}
        />
        <input
          aria-label="Percentage input"
          type="text"
          value={percentage}
          onChange={handleChangePercentage}
        />
        {uuid}
        <button onClick={() => handleRemove(uuid)}>❌</button>
      </div>
    </div>
  );
};
