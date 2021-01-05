import React, { useState, useEffect } from 'react';
import '../../App.css';
import Navbaroo from '../../components/Navbar/Navbar';
import { SocialIcon } from 'react-social-icons';
import { Card, Elevation, Icon } from "@blueprintjs/core";
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <Navbaroo />
      <header className="App-header">
        <span className="landingText">Welcome.</span>
        <span className="supportingText">
          My name is Enrique Goudet.
          I am a software engineer from Mexico City currently living in Los Angeles.
          When I'm not coding, I love meeting new people, exploring cities, and doing 
          adventure sports such as surfing and skiing.
          <br />
          Above all, I like to build stuff and learn new things.
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
            <div className="socialsItem">
              <SocialIcon url="https://www.linkedin.com/in/enrique-goudet-094430186/" />
            </div>
            
        </div>
      </div>
      <div className="cardsContainer">
        <div className="cards">
          <Link to="/work">
            <Card className="card" interactive={true} elevation={Elevation.ONE}>
              <div className="cardText">
                Work
              </div>
              <div className="cardIcon">
                <Icon icon="arrow-right" iconSize={28} />
              </div>
            </Card>
          </Link>
          <Link to="/projects">
            <Card className="card" interactive={true} elevation={Elevation.ONE}>
              <div className="cardText">Projects</div>
              <div className="cardIcon">
                <Icon icon="arrow-right" iconSize={28} />
              </div>
            </Card>
          </Link>
          <Link to="/quotes">
            <Card className="card" interactive={true} elevation={Elevation.ONE}>
              <div className="cardText">Quotes</div>
              <div className="cardIcon">
                <Icon icon="arrow-right" iconSize={28} />
              </div>
            </Card>
          </Link>
          <Link to="/books">
            <Card className="card" minimal interactive={true} elevation={Elevation.ONE}>
              <div className="cardText">Books</div>
              <div className="cardIcon">
                <Icon icon="arrow-right" iconSize={28} />
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
