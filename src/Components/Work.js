import React from 'react';
import './Work.scss';
import {Link} from 'react-router-dom';

import bookstore from "../images/bookadian.png";
import moviedb from '../images/moviedb.png';
import schoolmanagement from '../images/schoolmanagement.png';

const Work = () => (
    <div id="work" class="work">
        <h2 class="work--title">Work</h2>
        <div class="work--showcase">
            <div class="work--showcase--box">
                <div class="work--showcase--box--image">
                    <img class="work--showcase--box--image--file" src={bookstore} />
                </div>
                <div class="work--showcase--box--description">
                    <p>"Book shopping site created with laravel and react"</p>
                </div>
                <div class="work--showcase--box--actions">
                    <div class="view-demo">
                        View Demo
                    </div>
                    <div class="view-article">
                        Read Article
                    </div>
                </div>
            </div>
            <div class="work--showcase--box">
            <div class="work--showcase--box--image">
                <img class="work--showcase--box--image--file" src={moviedb} />
            </div>
            <div class="work--showcase--box--description">
                <p>"API based moviedb site with react"</p>
            </div>
            <div class="work--showcase--box--actions">
                <div class="view-demo">
                <a class="view-demo--link" href='https://thaungthanhan.github.io/moviedb/' target="_blank">View Demo</a>
                </div>
                <div class="view-article">
                    Read Article
                </div>
            </div>
            </div>
            <div class="work--showcase--box">
            <div class="work--showcase--box">
            <div class="work--showcase--box--image">
                <img class="work--showcase--box--image--file" src={schoolmanagement} />
            </div>
            <div class="work--showcase--box--description">
                <p>"Student, teacher and attendance management system with Laravel"</p>
            </div>
            <div class="work--showcase--box--actions">
                <div class="view-demo">
                    View Demo
                </div>
                <div class="view-article">
                    Read Article
                </div>
            </div>
            </div>
            </div>
        </div>
        <hr style={{width:"30rem",color:"#000000",fontWeight:'bold',marginTop:'4rem',marginBottom:'3rem'}} />

    </div>
)

export default Work;