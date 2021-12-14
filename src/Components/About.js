import React from 'react';
import './About.scss';
import profile from '../images/portfolio.jpg';
const About = () => (
    <div id="about" class="about">
        <h2 class="about--title">About</h2>
        <div class="about--details">
            <img class="about--details--image" src={profile}/>
            <div class="about--details--info">
                <p>
                A hardworking and ambitious individual who excels at frontend web development with ReactJS as well as backend web technologies such as Laravel and Firebase.
                </p>
                <p>
                The ability to tinker for long hours of coding and creative thinking has helped me stand out as a web artisan.
                </p>
            </div>
        </div>
        <hr style={{width:"30rem",color:"#000000",fontWeight:'bold',marginBottom:'3rem'}} />
    </div>
);

export default About;