import { ADD_GRADE, CLEAR_LIST, REMOVE_GRADE, UPDATE_GRADE } from './actions';

export const initalState = {
    config: {
        maxGrade: 5,
        desiredGrade: 3,
    },
    gradeList: [],
};
let id = 0;
export const reducer = (state = initalState, action) => {
    //console.log(state, action)
    const { gradeList: currentGradeList, config } = state;
    const { type, payload } = action;
    //! Rename to be consistent
    if (type == ADD_GRADE) {
        const defaultGrade = {
            grade: '5',
            percentage: '20%',
            name: '',
        };
        const newGrade = { ...defaultGrade, uuid: id++ };
        return {
            ...initalState,
            gradeList: [...currentGradeList, newGrade],
        };
    }
    if (type == REMOVE_GRADE) {
        const updatedGradeList = currentGradeList.filter(
            (el) => el.uuid !== payload.uuid
        );
        return {
            ...initalState,
            gradeList: updatedGradeList,
        };
    }
    if (type == UPDATE_GRADE) {
        const dirtyGradeUUID = currentGradeList.findIndex(
            ({ uuid }) => uuid === payload.uuid
        );
        const updatedSlot = {
            ...currentGradeList[dirtyGradeUUID],
            [payload.field]: payload.value,
        };
        const updatedGradeList = [...currentGradeList];
        updatedGradeList[dirtyGradeUUID] = updatedSlot;
        return {
            ...initalState,
            gradeList: updatedGradeList,
        };
    }
    if (type == CLEAR_LIST) {
        return {
            ...initalState,
            gradeList: [],
        };
    }
    return state;
};
