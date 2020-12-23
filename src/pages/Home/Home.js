import React, { useState, useEffect } from 'react';
import '../../App.css';
import Navbaroo from '../../components/Navbar/Navbar';
import { SocialIcon } from 'react-social-icons';


function Home() {
  return (
    <div className="App">
      <Navbaroo />
      <header className="App-header">
        <span className="landingText">Welcome.</span>
        <span className="supportingText">
          My name is Enrique Goudet.
          I am a software engineer from Mexico City currently living in Los Angeles.
        </span>
      </header>
      <div className="socialsContainer">
        <div className="socials">
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
      </div>
      <div className="bio">
          <h4>
            
            <br/>
            When I'm not coding, I love meeting new people, exploring cities, and doing adventure sports such as surfing or skiing.
            <br/>
            I love reading a good book, drinking good coffee and appreciating a thought provoking piece of art.
            <br/>
            I also love a good rave.
            <br/>
            Above all, I like to build stuff and learn new things.
          </h4>

        </div>
    </div>
  );
}

export default Home;
