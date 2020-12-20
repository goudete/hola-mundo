import React from 'react';
import {
  Row, Col, Container
} from 'react-bootstrap';
import '../../App.css';
import Navbaroo from '../../components/Navbar/Navbar';


function Projects() {
  return (
    <div className="App">
      <Navbaroo />
      <header className="App-header">
        <h1>
          Cool Projects
        </h1>
      </header>
      <Container>
        <div className="contentSection">
          <Row>
            <Col md={6}>
              <h2>Ordering tool for Restaurants</h2>
              <a href="https://github.com/goudete/qr">Check it out</a>
            </Col>
            <Col md={6}>
              <p>
              Developed a digital menu for restaurants with the ability to place orders and pay. <br />
              Collaborated with two other developers <br />
              Designed and implemented the customer experience using Django and Bootstrap. <br />
              Successfully onboarded 2 restaurants, with over 4,000 users. <br />
              Utilized Python, Django, HTML, CSS, Bootstrap, PostgreSQL, Heroku. <br />
              </p>
            </Col>
          </Row>
        </div>
        <div className="contentSection">
          <Row>
            <Col md={6}>
              <h2>Ecommerce Web App</h2>
              <a href="http://bit.ly/SALDEGUSANO">Check it out</a>
            </Col>
            <Col md={6}>
              <p>            
                Developed a digital catalog for instagram sellers with the ability to place orders and pay.<br />
                Collaborated with two other developers <br />
                Designed and implemented the customer experience using Django and Bootstrap. <br />
                Successfully onboarded 1 <a href="https://www.instagram.com/saldegusano_">instagram seller.</a> <br />
                Utilized Python, Django, HTML, CSS, Bootstrap, PostgreSQL, Heroku. <br />

              </p>
            </Col>
          </Row>
        </div>
        <div className="contentSection bottomSection" style={{ marginBottom: "10em"}}>
          <Row>
            <Col md={6}>
              <h2>Senior Thesis Project</h2>
              <a href="https://github.com/goudete/comps-client">Client code</a> <br />
              <a href="https://github.com/goudete/comps-server">Server code</a>
            </Col>
            <Col md={6}>
              <p>            
                Developed a web application with a recommender system<br />
                Used React for the frontend, Django for the backend, SQLite for the database<br />
                The recommender system is a user based collaborative filtering system<br />
                Utilized Pandas, Numpy, and Cosine Similarity<br />
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
