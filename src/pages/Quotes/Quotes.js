import React from 'react';
import {
  Row, Col, Container
} from 'react-bootstrap';
import '../../App.css';
import Navbaroo from '../../components/Navbar/Navbar';


function Quotes() {
  return (
    <div className="App">
      <Navbaroo />
      <header className="App-header">
        <h1>
          Inspiring Quotes
        </h1>
      </header>
      <Container>
        <Row>
          <h5>
            'A man who procrastinates in his choosing 
            will inevitably have his choice made for 
            him by circumstance.'
          </h5>
          <h5>
            "Life shrinks or expands in proportion to 
            one's courage."
          </h5>
          <h5>
            “If one asked permission there was a 50% chance 
            it would be refused. If one just got on with it, 
            19 times out of 20 nothing was said.”
          </h5>
          <h5>
            "Si vas a hacer algo, hazlo bien"
          </h5>
          <h5>
            "Who is your user?"
          </h5>
          <h5>
            "Don't take things personally"
          </h5>
          <h5>
            "life means more when you are deeply involved in 
            your work, appreciating the treasure of a well-furnished 
            mind and interesting company, usually smarter than you."
          </h5>
          <h5>
            "I learned from Ogilvy that brutally hard work is the 
            secret of great writing and that, if you’re patient, there 
            is always a better way to say it."
          </h5>
        </Row>
      </Container>
    </div>
  );
}

export default Quotes;
