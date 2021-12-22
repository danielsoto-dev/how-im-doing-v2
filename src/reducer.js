import { ADD_GRADE, CLEAR_LIST, REMOVE_GRADE } from "./actions";

export const initalState = {
  config: {
    maxGrade: 5,
    desiredGrade: 3,
  },
  gradeList: [],
};
let id = 0;
export const reducer = (state = initalState, action) => {
  if (action.type == ADD_GRADE) {
    const grade = { ...action.payload, uuid: id++ };
    return {
      ...state.config,
      gradeList: [...state.gradeList, grade],
    };
  }
  if (action.type == REMOVE_GRADE) {
    return {
      ...state.config,
      gradeList: state.gradeList.filter(
        (el) => el.uuid !== action.payload.uuid
      ),
    };
  }
  if (action.type == CLEAR_LIST) {
    return {
      ...state.config,
      gradeList:[]
    }
  }
  return state;
};
