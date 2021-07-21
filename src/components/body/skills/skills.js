import React from 'react';
import './skills.css';

function Skills(){
    return(
    <>
        <div className='skills-type'>
        <label className='section-title'>Skills:</label>
        <br></br><br></br>
        <div className='skl-pic1'>
            <i class="Skill-icon-type devicon-cplusplus-plain-wordmark colored"><div className='skillname'>C++</div></i>
            <i class="Skill-icon-type devicon-python-plain-wordmark colored"><div className='skillname'>python</div></i>
            <i class="Skill-icon-type devicon-html5-plain-wordmark colored"><div className='skillname'>HTML</div></i>
            <i class="Skill-icon-type devicon-css3-plain-wordmark colored"><div className='skillname'>CSS</div></i>
            <i class="Skill-icon-type devicon-javascript-plain colored"><div className='skillname'>JavaScript</div></i>
        </div>
        <div className='skl-pic2'>
            <i class="Skill-icon-type devicon-react-original-wordmark colored"><div className='skillname'>ReactJS</div></i>
            <i class="Skill-icon-type devicon-nodejs-plain-wordmark colored"><div className='skillname'>NodeJS</div></i>
            <i class="Skill-icon-type devicon-express-original-wordmark"><div className='skillname'>Express</div></i>
            <i class="Skill-icon-type devicon-mongodb-plain-wordmark colored"><div className='skillname'>mongoDB</div></i>
            <i class="Skill-icon-type devicon-git-plain colored"><div className='skillname'>Git</div></i>
        </div>
        </div>  
    </>);
};

export default Skills;