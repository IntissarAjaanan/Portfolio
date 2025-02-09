import styled from "styled-components";

const AboutContainer = styled.div`
background-color: #1A1A1D;
padding: 40px;
text-align: center;
`;

const TextWrapper = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center; 
  align-items: center; 
  flex-wrap: wrap;
  gap: 25px
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #A64D79;
  `;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #FFF2F2;
  margin-bottom: 20px;
`;

export const About = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <TextWrapper>
        <Paragraph>
          I'm a curious mind, a passionate full-stack developer who loves building solutions and
          impactful web applications. Always exploring new technologies, I thrive
          on problem-solving and turning ideas into reality. Let's create something
          amazing!
        </Paragraph>
      </TextWrapper>
    </AboutContainer>
  );
};
