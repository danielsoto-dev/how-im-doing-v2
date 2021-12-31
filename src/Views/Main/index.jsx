import GradeList from '../../components/GradeList';
import { Wrapper, GradesContainer } from './styles';
export const Main = () => {
    return (
        <Wrapper>
            <GradesContainer>
                <h2>Type your grades! 📚</h2>
                <h3>Let's start!</h3>
                <GradeList></GradeList>
            </GradesContainer>
        </Wrapper>
    );
};
