export const ADD_GRADE = "ADD_GRADE";
export const REMOVE_GRADE = "REMOVE_GRADE";
export const CLEAR_LIST = "CLEAR_LIST";
export const UPDATE_GRADE = "UPDATE_GRADE";
export const UPDATE_CONFIG = "UPDATE_CONFIG";
// ? Add to argumetns de object that represent the grade
export const addGrade = () => ({
    type: ADD_GRADE,
});
export const removeGrade = ({ uuid }) => ({
    type: REMOVE_GRADE,
    payload: { uuid },
});
export const clearList = () => ({ type: CLEAR_LIST });
export const updateGrade = ({ value, field, uuid }) => ({
    type: UPDATE_GRADE,
    payload: { value, field, uuid },
});

export const updateConfig = ({ config }) => ({
    type: UPDATE_CONFIG,
    payload: { config },
});
