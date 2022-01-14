const CONGRATULATION_MSM = `Congrats!! You already reach your desired grade 🥳`;
const PASSING_GRADE = 3;
export const getScoreText = ({ remainingPercentage, fixedFinalScore }) => {
    let scoreText;
    if (remainingPercentage === 0) {
        scoreText = `Your final grade is: ${fixedFinalScore}`;
    } else {
        scoreText = `Your current grade is ${fixedFinalScore}`;
    }
    return scoreText;
};

export const getMsm = ({ fixedFinalScore, desiredGrade }) => {
    let msm;
    if (fixedFinalScore >= desiredGrade) {
        msm = CONGRATULATION_MSM;
    } else {
        msm = `You didn't get yout desired grade 😭`;
    }
    return msm;
};
