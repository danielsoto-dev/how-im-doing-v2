/**
 *
 * grades:{
 *  grade: number,
 *  percentage:
 * }
 */
const INITIAL_COUNT = 0;
export const getFinalScore = (grades) => {
    console.log(grades);
    const reduceGrades = (acc, { grade, percentage }) => {
        //Take the number part of the input [Maybe this is not neccesary, is if u want to keep the '%' symbol]
        const intPertentage = parseInt(percentage.split('%')[0]);
        const intGrade = parseInt(grade);
        return acc + intGrade * (intPertentage / 100);
    };
    const result = grades.reduce(reduceGrades, INITIAL_COUNT);
    return result;
};

export const isTotalPercentageCorrect = (grades) => {
    const sumPercentages = (acc, { percentage }) => {
        return acc + parseInt(percentage.split('%')[0]);
    };
    const totalPercentage = grades.reduce(sumPercentages, INITIAL_COUNT);
    return totalPercentage <= 100;
};
