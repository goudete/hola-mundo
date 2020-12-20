import React, { useState, useEffect } from 'react';
import '../../App.css';
import Navbaroo from '../../components/Navbar/Navbar';
import { SocialIcon } from 'react-social-icons';


function Home() {
  return (
    <div className="App">
      <Navbaroo />
      <header className="Home-header">
        <h1>
          <span style={{ color: '#81d8f7'}}>Welcome.</span>
        </h1>
        <div className="bio">
          <h4>
            My name is Enrique Goudet. <br/>
            I am a software engineer from Mexico City
            currently living in Los Angeles. <br/>
          </h4>
          <h4>
          I like to build stuff and learn new things.
          </h4>
        </div>
        <div className="socialsContainer">
          <div className="socialsItem">
            <SocialIcon url="https://twitter.com/EnriqueGoudet" />
          </div>
          <div className="socialsItem">
            <SocialIcon url="https://github.com/goudete" />
          </div>
          <div className="socialsItem">
            <SocialIcon url="https://www.instagram.com/quiquegdt/" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
