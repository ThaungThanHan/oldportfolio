import React from 'react';
import './About.scss';
import profile from '../images/portfolio.jpg';
const About = () => (
    <div id="about" class="about">
        <h2 class="about--title">About</h2>
        <div class="about--details">
            <img class="about--details--image" src={profile}/>
            <div class="about--details--info">
                <p>Full-stack web developer focusing on user interfaces from command line tools, to design systems, to rich experiences.</p>
                <p>Working freelance based in Myanmar</p>
            </div>
        </div>
        <hr style={{width:"30rem",color:"#000000",fontWeight:'bold',marginBottom:'3rem'}} />
    </div>
);

export default About;