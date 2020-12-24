import React from 'react';
import {
  Row, Col, Container
} from 'react-bootstrap';         
import '../../App.css';
import Navbaroo from '../../components/Navbar/Navbar';


function ReadingList() {
  return (
    <div className="App">
      <Navbaroo />
      <header className="App-header">
        <span className="landingText">Dope books</span>
      </header>
      <Container>
        <div className="booksContainer">
            <div className="bookSection">
              <h5>
                The Alchemist <br />
                - Paulo Coelho
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                Barbarian Days: A Surfing Life <br />
                - William Finnegan
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                Influence: The Psychology of Persuasion <br />
                - Robert B. Cialdini
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                How to Win Friends and Influence People <br />
                - Dale Carnegie
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                1984 <br />
                - George Orwell
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                Sapiens: A Brief History of Humankind <br />
                - Yuval Noah Harari
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                Homo Deus: A History of Tomorrow <br />
                - Yuval Noah Harari
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                21 Lessons for the 21st Century <br />
                - Yuval Noah Harari
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                Sapiens: A Brief History of Humankind <br />
                - Yuval Noah Harari
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                Principles: Life and Work <br />
                - Ray Dalio
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                Zero to One: Notes on Startups, or How to Build the Future <br />
                - Peter Thiel
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                The Lean Startup <br />
                - Eric Ries
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future <br />
                - Ashlee Vance
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                Blitzscaling<br />
                - Reid Hoffman
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                The Innovator's Dilemma <br />
                - Clayton M. Christensen
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                Billion Dollar Whale: The Man Who Fooled Wall Street, Hollywood, and the World <br />
                - Bradley Hope & Tom Wright
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                Black Swan <br />
                - Nassim Nicholas Taleb
              </h5>
            </div>
            <div className="bookSection">
              <h5>
              Zen and the Art of Motorcycle Maintenance <br />
                - Robert M. Pirsig
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                The Power of Now <br />
                - Eckhart Tolle
              </h5>
            </div>
            <div className="bookSection">
              <h5>
                Steve Jobs <br />
                - Walter Isaacson
              </h5>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default ReadingList;
