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
        <Row>
          <Col md={6}>
            <h2>Ordering tool for Restaurants</h2>
          </Col>
          <Col md={6}>
            <p>
             Developed a digital menu for restaurants with the ability to place orders and pay. <br />
             Collaborated with two other developers <br />
             Designed and implemented the customer experience using Django and Bootstrap. <br />
             Successfully onboarded 2 restaurants, with over 1,000 users. <br />
             Utilized Python, Django, HTML, CSS, Bootstrap, PostgreSQL, Heroku. <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p>            
              Developed a digital catalog for instagram sellers with the ability to place orders and pay.<br />
              Collaborated with two other developers <br />
              Designed and implemented the customer experience using Django and Bootstrap. <br />
              Successfully onboarded 1 instagram seller.  (https://www.instagram.com/saldegusano_) <br />
              Utilized Python, Django, HTML, CSS, Bootstrap, PostgreSQL, Heroku. <br />

            </p>
          </Col>
          <Col md={6}>
            <h2>Ecommerce Web App (bit.ly/SALDEGUSANO)</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>Senior Thesis Project</h2>
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
      </Container>
    </div>
  );
}

export default Projects;
