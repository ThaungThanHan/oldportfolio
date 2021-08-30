import React from 'react';
import './Main.scss';

import Header from './Header.js';
import About from './About.js';
import Work from './Work.js';
import Contact from './Contact.js';


const Main = () => (
    <div class="main">
        <Header/>
        <About/>
        <Work/>
        <Contact/>
    </div>
);

export default Main;