import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeGrade, updateGrade } from "../../actions";
export default GradeSlot = ({ name, grade, percentage, uuid }) => {
  /*
  const [name, setName] = useState("");
  const [grade, setGrade] = useState(initialGrade);
  const [percentage, setPercentage] = useState(initialPercentage); */
  const dispatch = useDispatch();
  const handleRemove = (uuid) => {
    dispatch(removeGrade({ uuid }));
  };
  const handleChange = (e) => {
    const { value, id: field } = e.target;
    console.log(value, field);
    dispatch(updateGrade({ value, field, uuid }));
  };
  /**
  const handleChangeGrade = (e) => {
    setGrade(e.target.value);
  };
  const handleChangePercentage = (e) => {
    setPercentage(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target);
  }; */
  return (
    <Slot key={uuid}>
      <p>Icon 1</p>
      <p>Icon 2</p>
      <Input
        aria-label="Name Of Slot input"
        type="text"
        onChange={handleChange}
        id="name"
        value={name}
      />
      <Input
        id="grade"
        aria-label="Grade input"
        type="text"
        onChange={handleChange}
        value={grade}
      />
      <Input
        id="percentage"
        aria-label="Percentage input"
        type="text"
        onChange={handleChange}
        value={percentage}
      />
      <button onClick={() => handleRemove(uuid)}>❌</button>
    </Slot>
  );
};

const Slot = styled.div`
  padding: 0.5rem 1.25rem;
  background-color: #3590f3;
  display: grid;
  grid-template-columns:
    repeat(2, 45px) minmax(145px, 250px) repeat(2, minmax(25px, 60px))
    auto;
  /*grid-template-columns: 18px 18px minmax(145 px, 250 px) repeat(
      2,
      minmax(25 px, 60 px)
    );
  grid-column-gap: 10 px;
  column-gap: 10 px;
  align-items: center;
  padding: 0 10 px;
  width: 100%;
  height: 40 px;
  border-radius: 0 24 px 24 px 0;
  margin-bottom: 5 px;*/
`;

const Input = styled.input`
  height: 25px;
  padding: 1px 10px;
  border: none;
  border-radius: 24px;
  background-color: #e5efff;
`;
