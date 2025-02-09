import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const SNav = styled.div`
    width: 100%;
    height: 70px;
    background-color: #1A1A1D;
    color: #FFF2F2;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    position: fixed;
    z-index: 1000;

    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;

const SLogo = styled.img`
    width: 55px;
    height: 55px;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`;

const Links = styled.div`
    display: flex;
    gap: 20px;
    padding: 0 40px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const SLink = styled(Link)` 
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    font-size: 17px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, color 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        color: #A64D79;
    }
`;

const SmallLinks = styled.div`
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 0 20px;

    span {
        width: 30px;
        height: 3px;
        background-color: #A64D79;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
    width: 250px;
    height: 100vh;
    background-color: #1A1A1D;
    color: #FFF2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    transition: right 0.3s ease-in-out;
    z-index: 1100;

    @media (max-width: 400px) {
        width: 200px;
    }
`;

const SidebarLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-size: 18px;
    margin: 15px 0;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, color 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        color: #A64D79;
    }
`;

const Overlay = styled.div`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleOverlayClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <SNav>
                <SLogo src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo" />
                <Links>
                    <SLink to="home" smooth={true} duration={300}>Home</SLink>
                    <SLink to="about-me" smooth={true} duration={500} offset={-70}>About Me</SLink>
                    <SLink to="resume" smooth={true} duration={300}>Resume</SLink>
                    <SLink to="skills" smooth={true} duration={300}>Skills</SLink>
                    <SLink to="projects" smooth={true} duration={300}>Projects</SLink>
                    <SLink to="contact" smooth={true} duration={300}>Contact Me</SLink>
                </Links>

                <SmallLinks onClick={() => setIsOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </SmallLinks>
            </SNav>

            <Sidebar isOpen={isOpen}>
                <SidebarLink to="home" smooth={true} duration={300} onClick={() => setIsOpen(false)}>Home</SidebarLink>
                <SidebarLink to="about-me" smooth={true} duration={300} offset={-70} onClick={() => setIsOpen(false)}>About Me</SidebarLink>
                <SidebarLink to="resume" smooth={true} duration={300} onClick={() => setIsOpen(false)}>Resume</SidebarLink>
                <SidebarLink to="skills" smooth={true} duration={300} onClick={() => setIsOpen(false)}>Skills</SidebarLink>
                <SidebarLink to="projects" smooth={true} duration={300} onClick={() => setIsOpen(false)}>Projects</SidebarLink>
                <SidebarLink to="contact" smooth={true} duration={300} onClick={() => setIsOpen(false)}>Contact Me</SidebarLink>
            </Sidebar>

            <Overlay isOpen={isOpen} onClick={handleOverlayClick} />
        </>
    );
};
