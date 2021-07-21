import React from 'react';
import './mobile.css';

function Mobile({isOpen,setIsOpen}){     
    return (
    <>
        <div className='mobile'>
            <div className='close-icon' onClick={()=>{
                setIsOpen(!isOpen); }}>
            <i class="fi-rr-cross-circle"></i>
            </div>
            
            <div className='mobile-options'>
                <div className='mobile-option'>
                    <a href='#about'>
                    <i class="fi-rr-info option-icon about-icon"></i> 
                    About Me
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#projects'>
                        <i class="fi-rr-edit-alt option-icon project-icon"></i>
                        Projects
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#sills'>
                    <i class="fi-rr-laptop option-icon skill-icon"></i>
                    Skills
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#contact'>
                    <i class="fi-rr-user-add option-icon contact-icon"></i>
                    Contact
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#contact'>
                    <i class="fi-rr-file option-icon resume-icon"></i>
                    Resume
                    </a>
                </div>
            </div>
        </div>
    </>);
}

export default Mobile;