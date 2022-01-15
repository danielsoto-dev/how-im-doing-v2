import { AboutText, AboutContainer, ContactLink, Name } from "./styles";

const gitHubLink = `https://github.com/danielsoto-dev`;
export default About = () => {
    return (
        <AboutContainer>
            <AboutText>
                Hi! I'm <Name>Daniel Soto Jaimes</Name>, a Software Engineer
                Student from Colombia 🇨🇴. I created this web app for my friends
                who were constantly looking to know how they were doing. So feel
                free to use it! If you want some new features, let me know on my{" "}
                <ContactLink target="_blank" href={gitHubLink}>
                    Github
                </ContactLink>
            </AboutText>
        </AboutContainer>
    );
};
