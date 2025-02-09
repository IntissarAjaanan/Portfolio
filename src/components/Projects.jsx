import styled from "styled-components";
import { FaGithub, FaEye } from "react-icons/fa";
import {ParticlesComponent} from "../Effect/ParticlesComponent"

const ProjectsWrapper = styled.div`
  padding: 60px 40px;
  background-color: #1a1a1d;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #A64D79;
  margin-bottom: 40px;
  font-weight: 700;
  text-transform: uppercase;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 30px;
  align-items: center;
`;

const ProjectCard = styled.div`
  position: relative;
  background: linear-gradient(145deg,rgba(241, 167, 184, 0.1),#3B1C32);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  height: 450px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: translateY(-20px) rotate(-2deg);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -15px;
    width: 100%;
    height: 100%;
    border-left: 15px solid #f8a1c3;
    border-radius: 20px;
    z-index: -1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  color: #fff;
  margin: 20px 0;
  font-weight: 600;
  letter-spacing: 2px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const Button = styled.a`
  background-color: #fff;
  color: #3B1C32;
  padding: 12px 12px;
  border-radius: 25px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color:rgba(175, 75, 148, 0.17);
    color: #fff;
    transform: scale(1.05);
  }

`;

export const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      image: "/images/e-commerce.png",
      description: "An e-commerce website with an interactive UI.",
      demoLink: "https://intissarajaanan.github.io/E-commerce-coffee-shop/",
      githubLink: "https://github.com/IntissarAjaanan/E-commerce-coffee-shop"
    },
    {
      title: "Quiz-i",
      image: "/images/quiz-i.png",
      description: "A fun and engaging quiz game, developed to challenge your knowledge.",
      demoLink: "https://intissarajaanan.github.io/Quiz-Game-Cognorise-Info-Tech/",
      githubLink: "https://github.com/IntissarAjaanan/Quiz-Game-Cognorise-Info-Tech"
    },
    {
      title: "Absence Management",
      image: "/images/absence.jpg",
      description: "An application to manage and track  trainers and trainees absences efficiently.",
      demoLink: "#",
      githubLink: "#"
    },
  ];

  return (
    <ProjectsWrapper>
      <Title>Projects</Title>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <>
          <ParticlesComponent/>
          <ProjectCard key={index}>
            <ProjectImage src={`${process.env.PUBLIC_URL + project.image}`} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ButtonContainer>
              <Button href={project.demoLink} target="_blank">
                <FaEye />
              </Button>
              <Button href={project.githubLink} target="_blank">
                <FaGithub />
              </Button>
            </ButtonContainer>
          </ProjectCard>
          </>
        ))}
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};
