import {useEffect} from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { NavBar } from "./components/NavBar";
import { ParticlesComponent } from "./Effect/ParticlesComponent";
import "./App.css";
import { Copyright } from "./components/Copyright";

function App() {  
  return (
    <div className="App">
      <ParticlesComponent />
        <NavBar />
        <main>

        <div id="home">
          <Header />
        </div>
        <div id="about-me">
          <About />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Copyright/>
        </main>
    </div>
  );
}

export default App;
