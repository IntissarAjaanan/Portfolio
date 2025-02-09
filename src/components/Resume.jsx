import styled from "styled-components";

const ResumeWrapper = styled.div`
  padding: 40px;
  background-color: #1A1A1D;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #A64D79;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #FFF2F2;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #6A1E55;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #A64D79;
  }
`;

export const Resume = () => {
  return (
    <ResumeWrapper>
      <Title>Resume</Title>
      <Paragraph>
        You can download my full resume to get more detailed and
        information about my background and skills.
      </Paragraph>
      <DownloadButton href="/Docs/cv.pdf" download>
        Download Resume
      </DownloadButton>
    </ResumeWrapper>
  );
};
