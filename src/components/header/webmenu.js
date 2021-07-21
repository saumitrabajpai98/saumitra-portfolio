import React from 'react';
import './web.css';

function Web(){
    return (<>
        <div className="web">
            <div className='web-option'>
                <a href='#about'>
                <i class="fi-rr-info option-icon about-icon"></i> 
                About Me
                </a>
            </div>
            <div className='web-option'>
                <a href='#projects'>
                    <i class="fi-rr-edit-alt option-icon project-icon"></i>
                    Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#skills'>
                <i class="fi-rr-laptop option-icon skill-icon"></i>
                Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'>
                <i class="fi-rr-user-add option-icon contact-icon"></i>
                Contact
                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'>
                <i class="fi-rr-file option-icon resume-icon"></i>
                Resume
                </a>
            </div>
        </div>
    </>);
}

export default Web;