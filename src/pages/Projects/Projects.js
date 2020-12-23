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
              <h2>Ecommerce Web App</h2>
              <a href="http://bit.ly/SALDEGUSANO">Check it out</a>
            </Col>
            <Col md={6}>
              <p>            
                This project came out of an observation of how Instagram was being used (before Instagram shop). 
                I noticed that many accounts were being created with the purpose of selling things. All of these 
                types of accounts asked the potential buyer to contact the account through "direct message" to view 
                their catalog and place their order.<br />
                <br />
                In collaboration with two other developers, we developed an easy to setup catalog were these budding 
                entrepreneurs could place their items and easily accept payments and manage their orders. <br />
                <br />
                We successfully onboarded 1 <a href="https://www.instagram.com/saldegusano_">instagram seller.</a> <br />
                <br />
                We ended up competing with Instagram shop, which was the end of our project. I learned it's near impossible 
                to compete with a company on their own turf. I also learned how to put myself in my potential user's shoes 
                and understand their incentives and biggest pain points.

              </p>
            </Col>
          </Row>
        </div>
        <div className="contentSection">
          <Row>
            <Col md={6}>
              <h2>Recommender System Web App</h2>
              <a href="https://github.com/goudete/comps-client">Client code</a> <br />
              <a href="https://github.com/goudete/comps-server">Server code</a>
            </Col>
            <Col md={6}>
              <p>            
                This project is a platform that recommends places in LA based on a user's ratings of certain places. 
                Within the platform, a user can also follow other users and see their saved locations.<br />
                <br />
                Under the hood, the recommender engine uses a user based collaborative filtering approach.<br />
                <br />
                I usually like to stay in the frontend, but this project gave me a deep understanding of how math 
                is used to add value to users. I loved seeing how topics like linear algebra can be applied to the 
                real world. In this case, I thought it was mind blowing how you could use Cosine Similarity to determine 
                the similarity of different users, and then use this information to recommend places they have not seen.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
