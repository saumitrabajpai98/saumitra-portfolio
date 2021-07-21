import React from 'react';
import SocialContact from '../../common/socialcontact';
import './contact.css';

function Contact(){
    return(
    <>
        <div className='contact'>
        <label className='section-title'>Contact Me:</label> 
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch? Contact Me on theese platforms</p>
                    <SocialContact/>
                    <p className='contactNo'>Contact No: +91-9169833249</p>
                </div>
                <div className='download'>
                    <a download href={require('../../../assets/Saumitra_Bajpai_Resume2021.pdf').default}>
                    <i class="fi-rr-cloud-download download-icon">Download Resume</i>
                    </a>
                </div>
            </div>

        </div>  
    </>);
};

export default Contact; 