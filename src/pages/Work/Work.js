import React from 'react';
import {
  Row, Col, Container
} from 'react-bootstrap';
import '../../App.css';
import Navbaroo from '../../components/Navbar/Navbar';


function Work() {
  return (
    <div className="App">
      <Navbaroo />
      <header className="App-header">
        <h1>
          Work Experience
        </h1>
      </header>
      <Container>
        <div className="contentSection">
          <Row>
            <Col md={6}>
              <a href="https://www.peakmetrics.com/"><h2>PeakMetrics</h2></a>
            </Col>
            <Col md={6}>
              <p>
                Implemented a tagging feature that enables users tag their content using React <br />
                Implemented an exclude feature, which allows users to exclude multiple articles at once using React<br />
                Contributed 16 commits with 16,000 lines to the codebase<br />
                Merged 5 pull requests into production<br />
                Learned React, JavaScript, and a new codebase within the first 2 weeks of the internship <br />
                Utilized React.js<br />
              </p>
            </Col>
          </Row>
        </div>
        <div className="contentSection" style={{ marginBottom: "15em" }}> 
          <Row>
            <Col md={6}>
              <a href="https://www.urbvan.com/"><h2>Urbvan</h2></a>
            </Col>
            <Col md={6}>
              <p>            
                Alternative transportation startup in Mexico City, pre-established routes around Mexico City. Book your spot through the app<br />
                Improved efficiency of database by migrating data into new PostgreSQL schema <br />
                Worked with Pandas <br />
                Worked with Numpy<br />
                Utilized Python, Pandas, SQLAlchemy<br />
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Work;
