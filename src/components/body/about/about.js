import React from 'react';
import Socialcontact from '../../common/socialcontact';
import Breif from './breif.js';
import './about.css';

function About(){
    return(
    <>
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello There 👋, I am
                    <br/><span className='about-name'>Saumitra Bajpai</span>.
                    <br/>I am fond of Creating dynamic web apps and Problem Solving.
                </div>
                <div className='about-pic'>
                    <img src={require("../../../assets/coding.png").default} alt="Guy with a system coding" className='picture'/>
                </div>
            </div>
            <div className='breif'>
            <Breif/>
            </div>
            <div className='about-bottom'>
                <Socialcontact/>
            </div>
        </div>  
    </>);
};

export default About;