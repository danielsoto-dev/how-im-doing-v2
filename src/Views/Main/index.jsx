import styled from "styled-components"
import GradeList from "../../components/GradeList"
export default Main = () => {
    return (
        <Wrapper>
            <GradesContainer>
                <h2>Type your grades! 📚</h2>
                <h3>Let's start!</h3>
                <GradeList></GradeList>
            </GradesContainer>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const GradesContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;

    max-width: 1400px;
`