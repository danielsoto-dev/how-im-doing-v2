import { useSelector } from "react-redux";
import {
    getNeededScoreForDesiredScore,
    getTotalScore,
} from "../../utils/calculations";
import { getIDsOfEmptySlots } from "../../utils/grade-list-operations";
import { getMsm, getScoreText, getTitle } from "./result-utils";
import { ResultContainer, Text } from "./styles";

const DECIMALS = 2;
export default Result = () => {
    const gradeList = useSelector((state) => state.gradeList);
    const { desiredGrade, maxGrade } = useSelector((state) => state.config);
    const finalScore = getTotalScore({ grades: gradeList });
    //Add precision
    const fixedFinalScore = finalScore.toFixed(DECIMALS);
    const { remainingPercentage, remainingScore } =
        getNeededScoreForDesiredScore({
            desiredGrade,
            grades: gradeList,
        });
    let scoreText = getScoreText({
        remainingPercentage,
        fixedFinalScore,
    });
    let msm = getMsm({ fixedFinalScore, desiredGrade });
    return (
        <ResultContainer>
            <Text>{scoreText}</Text>
            {remainingPercentage !== 0 && (
                <Text>
                    You need {remainingScore} in the remaining{" "}
                    {remainingPercentage}%
                </Text>
            )}
            <Text>{msm}</Text>
        </ResultContainer>
    );
};
