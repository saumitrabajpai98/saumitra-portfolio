import React from 'react';
import Seperator from '../common/seperator.js';
import About from './about/about.js';
import './body.css';
import Contact from './contact/contact.js';
import Project from './projects/projects.js';
import Skills from './skills/skills.js';
import Work from './work/work.js';

function Body(){
    return (<>
        <div className='body'>
            <section id='about'>
                <About/>
            </section>
            <Seperator/>
            <section id='projects'>
                <Project/>
            </section>
            <Seperator/>
            <section id='skills'>
                <Skills/>
            </section>
            <Seperator/>
            <section>
                <Work/>
            </section>
            <Seperator/>
            <section id='contact'>
                <Contact/>
            </section>
            <Seperator/>
        </div>
    </>);
}

export default Body;