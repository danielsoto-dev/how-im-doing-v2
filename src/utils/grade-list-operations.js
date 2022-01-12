export const getIDsOfEmptySlots = (gradeList) => {
    const isGradeEmpty = ({ grade }) => grade === "";
    return gradeList.filter(isGradeEmpty);
};
