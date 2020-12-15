import React, { useState, useEffect } from 'react';
import { Navbar, Heading, Button, Alignment, Icon } from "@blueprintjs/core";
import {
    Link
  } from "react-router-dom";

 
const Navbaroo = () => {

 
//   const handleIncrement = () =>
//     setCount(currentCount => currentCount + 1);
 
//   const handleDecrement = () =>
//     setCount(currentCount => currentCount - 1);
 
//   useEffect(() => setCount(currentCount => currentCount + 1), []);
 
  return (
    <div>
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Link to="/">
                    <Navbar.Heading>Enrique Goudet</Navbar.Heading>
                </Link>
                <Navbar.Divider />
                <Link to="/projects">
                    <Button className="bp3-minimal" icon="projects" text="Projects" />
                </Link>
                <Link to="/work">
                    <Button className="bp3-minimal" icon="briefcase" text="Work" />
                </Link>
                <Link to="/quotes">
                    <Button className="bp3-minimal" icon="citation" text="Quotes" />
                </Link>
                <Link to="/books">
                    <Button className="bp3-minimal" icon="book" text="Reading List" />
                </Link>
            </Navbar.Group>
        </Navbar>
    </div>
  );
};
 
export default Navbaroo;