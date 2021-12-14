import React from 'react';
import './Work.scss';
import {Link} from 'react-router-dom';

import bookstore from "../images/bookadian.png";
import moviedb from '../images/moviedb.png';
import schoolmanagement from '../images/schoolmanagement.png';
import profitlossSite from '../images/profitlossSite.png';

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
                <div style={{flexDirection:"column"}} class="work--showcase--box--actions">
                    <div class="view-demo">
                        View Demo
                    </div>
                    <span>-- not published --</span>
                </div>
            </div>
            <div class="work--showcase--box">
            <div class="work--showcase--box--image">
                <img class="work--showcase--box--image--file" src={moviedb} />
            </div>
            <div class="work--showcase--box--description">
                <p>"API based moviedb site with react"</p>
            </div>
            <div style={{flexDirection:"column"}} class="work--showcase--box--actions">
                <div class="view-demo">
                <a class="view-demo--link" href='https://thaungthanhan.github.io/moviedb/' target="_blank">View Demo</a>
                </div>
                <span>-- Ready --</span>
            </div>
            </div>
            <div class="work--showcase--box">
            <div class="work--showcase--box">
            <div class="work--showcase--box--image">
                <img class="work--showcase--box--image--file" src={profitlossSite} />
            </div>
            <div class="work--showcase--box--description">
                <p>"Profit Loss Calculation Based on Exchange Rate with React&Firebase"</p>
            </div>
            <div style={{flexDirection:"column"}} class="work--showcase--box--actions">
                <div class="view-demo">
                <a class="view-demo--link" href='https://profitandloss-e8d9b.web.app/' target="_blank">View Demo</a>
                </div>
                <span>-- Ready --</span>
            </div>
            </div>
            </div>
        </div>
        <hr style={{width:"30rem",color:"#000000",fontWeight:'bold',marginTop:'4rem',marginBottom:'3rem'}} />

    </div>
)

export default Work;