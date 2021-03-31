import React from 'react';
import Fade from 'react-reveal';
import { Parallax, Background } from 'react-parallax';
import Container from 'react-bootstrap/Container'
import BgImage from './assets/img/parallex/background.webp';
import './App.css';

//components
import MyNavBar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/mycarousel.component";
import TitleMessage from "./components/title-message/titlemessage.component";
import About from "./pages/about/about.component"



const App = () => {
  return (
    <div className="App" style={{ position: "relative"}}>
      <MyNavBar />
      <MyCarousel />
      <TitleMessage />
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
    </div>
  );
}

export default App;
