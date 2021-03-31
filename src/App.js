import React from 'react';
import './App.css';
//components
import MyNavBar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/mycarousel.component";
import TitleMessage from "./components/title-message/titlemessage.component";



const App = () => {
  return (
    <div className="App">
      <MyNavBar />
      <MyCarousel />
      <TitleMessage />
      
    </div>
  );
}

export default App;
