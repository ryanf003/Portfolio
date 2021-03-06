import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Parallax, Background } from 'react-parallax';
import Container from 'react-bootstrap/Container'
import BgImage from './assets/img/parallex/background.webp';
import './App.css';

//components
import MyNavBar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/mycarousel.component";
import TitleMessage from "./components/title-message/titlemessage.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import ProjectsTimeline from "./components/projects-timeline/projects-timeline.component";
import Contact from "./pages/contact/contact.component";
import Footer from "./components/footer/footer.component";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions"



const App = () => {
  return (
    <div className="App" style={{ position: "relative"}}>
      <MyNavBar />
      <MyCarousel />
      <TitleMessage />
      <Particles className="particles particles-box" params={particlesOptions} />

      {/* About me Section */}
      <div>
        <Parallax 
          blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200} >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>

      {/* Skills section */}
      <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <hr />
              <Skills />
            </Slide>
          </Container>
      </div>

      {/* Experience Section */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={1000}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>

      {/* Projects */}
      <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <hr />
              <ProjectsTimeline />
            </Slide>
          </Container>
      </div>

      {/* Contact Section */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={1000}>
            <hr />
            <Contact />
          </Fade>
        </Container>
      </div>

      {/* Footer */}
      <hr />
      <Footer />

    </div>
  );
}

export default App;
