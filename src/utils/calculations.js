/**
 *
 * grades:{
 *  grade: number,
 *  percentage:
 * }
 */
const INITIAL_COUNT = 0;
//Naming
const percentageToNumber = (percentage) => {
    return Number(percentage.split("%")[0]);
};

//Reducer functions to get the totals
const sumOfScoresReducer = (acc, { grade, percentage }) => {
    //Take the number part of the input [Maybe this is not neccesary, is if u want to keep the '%' symbol]
    const intPertentage = percentageToNumber(percentage);
    const intGrade = Number(grade);
    return acc + intGrade * (intPertentage / 100);
};

const sumPercentagesReducer = (acc, { percentage }) => {
    return acc + percentageToNumber(percentage);
};
// Functions for getting the total value out of the array, and add functionality
const getTotalPercentage = ({ grades, INITIAL_COUNT = 0 }) => {
    return grades.reduce(sumPercentagesReducer, INITIAL_COUNT);
};
export const getTotalScore = ({ grades, INITIAL_COUNT = 0 }) => {
    return grades.reduce(sumOfScoresReducer, INITIAL_COUNT);
};
export const isTotalPercentageCorrect = ({ grades }) => {
    const totalPercentage = getTotalPercentage({ grades });
    return totalPercentage <= 100;
};

// Check Naming
export const getNeededScoreForDesiredScore = ({ desiredGrade, grades }) => {
    const partialScore = getTotalScore({ grades });
    const partialPercentage = grades.reduce(
        sumPercentagesReducer,
        INITIAL_COUNT
    );
    const remainingPercentage = 100 - partialPercentage;
    const remainingScore =
        (desiredGrade - partialScore) / (remainingPercentage / 100);
    return { remainingPercentage, remainingScore };
};
