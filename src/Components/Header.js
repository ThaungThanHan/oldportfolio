import React from 'react';
import './Header.scss';
import { Link, animateScroll as scroll } from "react-scroll";


const Header = () => (
    <div class="header">
        <div class="header--navlinks">
            <ul>
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            >   
                <li>About</li> 
            </Link>
            <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >   
                <li>Work</li> 
            </Link>
            <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >   
                <li>Contact</li> 
            </Link>
            </ul>
        </div>
        <div class="header--title">
            <h1 class="header--title--name">Thaung Than Han</h1>
            <p class="header--title--dev">Will-driven Developer</p>
        </div>
    </div>
);

export default Header;