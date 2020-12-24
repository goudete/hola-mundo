import React from 'react';
import {
  Row, Col, Container
} from 'react-bootstrap';
import '../../App.css';
import Navbaroo from '../../components/Navbar/Navbar';
import pm from '../../imgs/peakmetrics.png';
import shift from '../../imgs/shift.png';
import urbvan from '../../imgs/urbvan.png';


function Work() {
  return (
    <div className="App" style={{ backgroundColor: "#f6f8fa" }}>
      <Navbaroo />
      <header className="App-header">
        <span className="landingText">Work Experience</span>
      </header>
      <Container>
        <div className="contentSection">
          <Row>
            <Col md={6}>
            <span className="workTitle">PeakMetrics</span>
            <br />
            <span className="workDescription">
                PeakMetrics is a startup in Los Angeles that 
                tracks millions of news sites and blogs, 5+ social 
                platforms, podcasts, and TV/radio to let you know 
                when your brand is mentioned, automatically. <br />
                <br />
                Working here, I learned JavaScript, React and Node.js <br />
                <br />
                I came in contact with some incredibly smart and talented people, 
                and was inspired by their work ethic and knowledge. 
                Moreover, I refined my learning process.
            </span>
              <br />
              <a href="https://www.peakmetrics.com/">Check it out</a>
            </Col>
            <Col md={6}>
              <img 
                src={pm}
                alt="peakmetrics"
                className="image"
              />
            </Col>
          </Row>
        </div>
        <div className="contentSection">
          <Row>
            <Col md={6}>
              <span className="workTitle">Shift</span>
              <br />
              <span className="workDescription">            
                Shift was an online menu I cofounded with 3 friends. It helped
                restaurants handle inventory and allowed users to place orders and pay.
                The user would scan a qr code and get access to the restaurant's interactive menu. <br />
                <br />
                This experience taught me how to collaborate with other developers, 
                how to listen to user feedback and iterate quickly. This was the first 
                project that got some traction (2 restaurants and 4,000+ users). 
                Moreover, this experience made me fall in love with software development 
                and building products that add value to people's lives.
              </span>
              <br />
              <a href="https://shift-en.webflow.io/">Check it out</a>
            </Col>
            <Col md={6}>
              <img 
                  src={shift}
                  alt="shift"
                  className="image"
              />
            </Col>
          </Row>
        </div>

        <div className="contentSection">
          <Row>
            <Col md={6}>
              <span className="workTitle">Urbvan</span>
              <br />
              <span className="workDescription">            
                Urbvan is a transportation startup in Mexico City with pre-established routes around Mexico City.<br />
                <br />
                Urbvan was my first work experience in tech, and opened my eyes to what was possible. I learned the basics 
                of Python and data analysis and manipulation. It got me hooked.
              </span>
              <br />
              <a href="https://www.urbvan.com/">Check it out</a>
            </Col>
            <Col md={6}>
              <img 
                  src={urbvan}
                  alt="urbvan"
                  className="image urbvan"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Work;
