import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
  color: #FFF2F2;
  height: 100vh;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

const Heading = styled.h1`
  margin: 10px 0;
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const HighlightedText = styled.span`
  color:rgb(202, 96, 149); 
  font-weight: 700;
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #A64D79;
  color: #fff;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d66b96; 
  }
`;

const P = styled.p`
font-size: 1 rem;
padding-top: 10px;
color:rgb(205, 56, 172);
font-weight: bold;
`;

export const Header = () => {
  return (
    <HeaderWrapper id="about">
      <Heading>Hello!</Heading>
      <Heading>
        I am <HighlightedText>Intissar</HighlightedText>
      </Heading>
      <Heading>A Full-Stack Developer</Heading>
      <P>Let's create something amazing together!</P>

      <SocialLinksWrapper>
        <IconLink href="https://github.com/IntissarAjaanan/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/intissarajaanan/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
      </SocialLinksWrapper>
    </HeaderWrapper>
  );
};
