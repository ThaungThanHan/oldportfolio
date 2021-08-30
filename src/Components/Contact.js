import React from 'react';
import {Link} from 'react-router-dom';
import './Contact.scss';
import facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';


const Contact = () => (
    <div class="contact">
        <h2 class="contact--title">
            Contact
        </h2>
        <div id="contact" class="contact--info">
            <p class="contact--info--title">Feel free to email</p>
            <p class="contact--info--gmail"> - ericlimmm115@gmail.com - </p>
            <p class="contact--info--title2"> Also find me on </p>
            <div class="socialmedia">
                <a href="https://www.facebook.com/jackson.linn.39/"><img style={{width:"5rem",height:"5rem"}} src={facebook} /></a>
                <a href="https://github.com/ThaungThanHan"><img style={{width:"5rem",height:"5rem"}} src={github} /></a>
                <a href="https://linkedin.com/in/thaung-than-h-658b57118"><img style={{width:"5rem",height:"5rem"}} src={linkedin} /></a>                </div>
        </div>
    </div>
);

export default Contact;