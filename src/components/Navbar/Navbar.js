import React, { useState, useEffect } from 'react';
import { Navbar, Heading, Button, Alignment, Icon, Drawer } from "@blueprintjs/core";
import {
    Link
  } from "react-router-dom";

import './Navbar.css';

 
const Navbaroo = () => {
    const [menu, setMenu] = useState(false);
 
    return (
        <div>
            <Navbar className="navbaroo">
                <div className="navbarDesktop">
                    <Navbar.Group align={Alignment.LEFT}>
                        <Link to="/">
                            <Navbar.Heading>
                               <span className="eg">Enrique Goudet</span>
                            </Navbar.Heading>
                        </Link>
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        <Link to="/work">
                            <Button className="bp3-minimal" icon="briefcase" text="Work" style={{ color: 'white'}} />
                        </Link>
                        <Link to="/projects">
                            <Button className="bp3-minimal" icon="projects" text="Projects" style={{ color: 'white'}} />
                        </Link>
                        <Link to="/quotes">
                            <Button className="bp3-minimal" icon="citation" text="Quotes" style={{ color: 'white'}} />
                        </Link>
                        <Link to="/books">
                            <Button className="bp3-minimal" icon="book" text="Reading List" style={{ color: 'white'}} />
                        </Link>
                    </Navbar.Group>
                </div>
                <div className="navbarMobile">
                    <Navbar.Group align={Alignment.LEFT}>
                        <Link to="/">
                            <Navbar.Heading>Enrique Goudet</Navbar.Heading>
                        </Link>
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        <Icon 
                            icon="menu"
                            onClick={() => setMenu(true)}
                            style={{ color: 'white' }}
                        />
                    </Navbar.Group>
                </div>
            </Navbar>
            <Drawer
                isOpen={menu}
                onClose={() => setMenu(false)}
                style={{ backgroundColor: '#282c34' }}
            >
                <div className="menuContainer">
                    <div className="menuItems">
                        <Link to="/work">
                            <Button className="bp3-minimal" icon="briefcase" text="Work" style={{ color: 'white', fontSize: '24px', marginTop: '1em' }} />
                        </Link>
                        <Link to="/projects">
                            <Button className="bp3-minimal" icon="projects" text="Projects" style={{ color: 'white', fontSize: '24px', marginTop: '1em' }} />
                        </Link>
                        <Link to="/quotes">
                            <Button className="bp3-minimal" icon="citation" text="Quotes" style={{ color: 'white', fontSize: '24px', marginTop: '1em' }} />
                        </Link>
                        <Link to="/books">
                            <Button className="bp3-minimal" icon="book" text="Books" style={{ color: 'white', fontSize: '24px', marginTop: '1em' }} />
                        </Link>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};
 
export default Navbaroo;