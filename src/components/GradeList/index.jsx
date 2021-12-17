import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGrade, removeGrade } from "../../actions";
import GradeSlot from "../GradeSlot";
export default GradegradeList = () => {
  const gradeList = useSelector((state) => state.gradeList);
  const dispatch = useDispatch();
  console.log("grade", gradeList);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addGrade({ grade: 5, percentage: 20 }));
  };

  return (
    <div>
      {/* <form onSubmit={handleClick}> */}
      {gradeList.length > 0 ? (
        gradeList.map((item) => {
          return <GradeSlot {...item} key={item.uuid} />;
        })
      ) : (
        <p>How empty... 🦗🦗🦗</p>
      )}
      <button onClick={handleClick}>Add a term</button>
      {/* </form> */}
    </div>
  );
};
