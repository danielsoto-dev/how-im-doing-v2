import { useSelector } from "react-redux";
import {
    getFinalScore,
    getNeededScoreForDesiredScore,
} from "../../utils/calculations";
import { getIDsOfEmptySlots } from "../../utils/grade-list-operations";
const CONGRATULATION_MSM = `Congrats!! You reach your desired grade 🥳`;
const PASSING_GRADE = 3;
export default Result = () => {
    const gradeList = useSelector((state) => state.gradeList);
    const desiredGrade = useSelector((state) => state.config.desiredGrade);
    const finalScore = getFinalScore({ grades: gradeList });
    const ids = getIDsOfEmptySlots(gradeList);
    //Add precision
    const fixedFinalScore = finalScore.toFixed(2);
    const neededScore = getNeededScoreForDesiredScore({
        desiredGrade,
        grades: gradeList,
    });
    // add pass note
    let msm = null;
    if (fixedFinalScore > PASSING_GRADE) {
        msm = <p>{CONGRATULATION_MSM}</p>;
    } else {
        msm = <h1>:'C</h1>;
    }
    return (
        <>
            <p>Your final grade is: {fixedFinalScore}</p>
            {msm}
            <p>In the {JSON.stringify(ids)}</p>
        </>
    );
};
