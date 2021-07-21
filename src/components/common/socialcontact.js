import React from 'react';
import './scstyle.css';
import { SocialData } from './social';
function SocialContact(){
    const data = SocialData;
    return(
        <div className='social-contact'>
            {data.map((item)=>{
                return(
                    <a href={item.link}>
                    <div className='social-icon-div'>
                    <img src={item.icon} alt={item.platform} className='social-icon'/>
                    </div>
                    </a>
                );
            })}
        </div>
    );
}

export default SocialContact;