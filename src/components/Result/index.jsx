import { useSelector } from "react-redux";
import {
    getNeededScoreForDesiredScore,
    getTotalScore,
} from "../../utils/calculations";
import { getMsm, getScoreText, getRemainingMsm } from "./result-utils";
import { ResultContainer, Text } from "./styles";

const DECIMALS = 2;
export default Result = () => {
    const gradeList = useSelector((state) => state.gradeList);
    const { desiredGrade, maxGrade } = useSelector((state) => state.config);
    const finalScore = getTotalScore({ grades: gradeList });

    const { remainingPercentage, remainingScore } =
        getNeededScoreForDesiredScore({
            desiredGrade,
            grades: gradeList,
        }); //Add precision
    const fixedFinalScore = finalScore.toFixed(DECIMALS);
    const fixedRemainingScore = remainingScore.toFixed(DECIMALS);
    let scoreText = getScoreText({
        remainingPercentage,
        fixedFinalScore,
    });
    let msm = getMsm({
        fixedFinalScore,
        desiredGrade,
        fixedRemainingScore,
        maxGrade,
    });
    return (
        <ResultContainer>
            {scoreText}
            {remainingPercentage !== 0 &&
                getRemainingMsm({ remainingPercentage, fixedRemainingScore })}
            {msm}
        </ResultContainer>
    );
};
