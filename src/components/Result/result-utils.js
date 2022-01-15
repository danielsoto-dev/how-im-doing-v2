import React from "react";
import { DECIMALS } from "../../utils/calculations";
import { ScoreText } from "./styles";
import { Text } from "./styles";
const CONGRATULATION_MSM = `Congrats!! You already reach your desired grade of`;
const MOTIVATION_MSM = `You still can get the grade!`;
const FAIL_MSM = `You can't reach this one dude😭`;
export const getScoreText = ({ remainingPercentage, fixedFinalScore }) => {
    let scoreText;
    if (remainingPercentage === 0) {
        scoreText = (
            <Text>
                Your final score is:
                <ScoreText>{fixedFinalScore}</ScoreText>
            </Text>
        );
    } else {
        scoreText = (
            <Text>
                Your current grade is <ScoreText>{fixedFinalScore}</ScoreText>
            </Text>
        );
    }
    return scoreText;
};

export const getMsm = ({
    fixedFinalScore,
    desiredGrade,
    fixedRemainingScore,
    maxGrade,
}) => {
    let msm;
    if (fixedFinalScore >= desiredGrade) {
        msm = (
            <Text>
                {CONGRATULATION_MSM}{" "}
                <ScoreText>{desiredGrade.toFixed(DECIMALS)}</ScoreText>{" "}
            </Text>
        );
    } else {
        if (fixedRemainingScore <= maxGrade) {
            msm = <Text>{MOTIVATION_MSM}</Text>;
        } else {
            msm = <Text>{FAIL_MSM}</Text>;
        }
    }
    return msm;
};

export const getRemainingMsm = ({
    fixedRemainingScore,
    remainingPercentage,
}) => (
    <Text>
        You need {fixedRemainingScore} in the remaining {remainingPercentage}%
    </Text>
);
