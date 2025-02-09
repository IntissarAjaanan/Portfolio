import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaPython, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const SkillsWrapper = styled.div`
  padding: 40px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #A64D79;
  margin-bottom: 30px;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  max-width: 700px;
  margin: auto;
`;

const SkillIcon = styled.div`
  font-size: 4rem;
  color: #FFF2F2;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color:rgb(153, 95, 124);
  }
`;

export const Skills = () => {
  return (
    <SkillsWrapper>
      <Title>Skills</Title>
      <SkillsContainer>
        <SkillIcon><FaHtml5 title="HTML" /></SkillIcon>
        <SkillIcon><FaCss3Alt title="CSS" /></SkillIcon>
        <SkillIcon><FaBootstrap title="Bootstrap" /></SkillIcon>
        <SkillIcon><SiTailwindcss title="Tailwind" /></SkillIcon>
        <SkillIcon><FaJs title="JavaScript" /></SkillIcon>
        <SkillIcon><FaReact title="React" /></SkillIcon>
        <SkillIcon><FaPython title="Python" /></SkillIcon>
        <SkillIcon><FaDatabase title="MySQL" /></SkillIcon>
        <SkillIcon><SiMongodb title="MongoDB" /></SkillIcon>
        <SkillIcon><FaGitAlt title="Git" /></SkillIcon>
      </SkillsContainer>
    </SkillsWrapper>
  );
};
