import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGrade, clearList } from "../../actions";
import styled from "styled-components";
import GradeSlot from "../GradeSlot";
export default GradegradeList = () => {
  const gradeList = useSelector((state) => state.gradeList);
  const dispatch = useDispatch();
  console.log("grade", gradeList);
  const handleClickAdd = (e) => {
    e.preventDefault();
    dispatch(addGrade());
  };
  const handleClickReset = (e) => {
    e.preventDefault();
    dispatch(clearList());
  };
  const handleClickSubmit = (e) => {
    e.preventDefault();
    /* make the calculations */
  };
  return (
    <Fragment>
      {/* <form onSubmit={handleClick}> */}
      {gradeList.length > 0 ? (
        gradeList.map((item) => {
          return <GradeSlot {...item} key={item.uuid} />;
        })
      ) : (
        <p>How empty... 🦗🦗🦗</p>
      )}
      <ButtonContainer>
        <button onClick={handleClickAdd}>Add a term</button>
        <button onClick={handleClickReset}>Reset List</button>
        <button onClick={handleClickSubmit}> Calc 🧮</button>
      </ButtonContainer>
      {/* </form> */}
    </Fragment>
  );
};

const ButtonContainer = styled.div`
  flex-wrap: wrap;
  justify-content: space-around;
  display: flex;
`;
