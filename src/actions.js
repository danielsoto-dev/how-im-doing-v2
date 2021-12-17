export const ADD_GRADE = "ADD_GRADE";
export const REMOVE_GRADE = "REMOVE_GRADE";
export const CLEAR_LIST = "CLEAR_LIST";

// ? Add to argumetns de object that represent the grade
export const addGrade = ({ grade, percentage }) => ({
  type: ADD_GRADE,
  payload: { grade, percentage },
});
export const removeGrade = ({ uuid }) => ({
  type: REMOVE_GRADE,
  payload: { uuid },
});
export const clearList = () => ({ type: CLEAR_LIST });
