import React, { useState } from 'react';
import Web from './webmenu.js';
import Mobile from './mobilemenu.js';
import './header.css';

function Header(){
    const [isOpen, setIsOpen]=useState(false);//for the hamburger menu if it is less than 512px
    return (
    <>
        <div className="header">
            <div className="logo">
                Saumitra's Portfolio
            </div>
            <div className="menu">
                <div className="web-menu">
                   <Web/>
                </div>
                <div className="mobile-menu">
                    <div onClick={()=>{
                        setIsOpen(!isOpen);
                        }}> {/*This is to set and reset the hamburger icon and its data*/}
                    <i class="fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>} {/*passing it as props*/}
                </div>
            </div>
        </div>
    </>);
}

export default Header;