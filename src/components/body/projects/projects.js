import React from 'react';
import ProjectCard from './projectcard';
import './projects.css'; 
import { ProjectData } from './projectsdata';
   

function Project(){
    const Data=ProjectData;
    return(
    <>
        <div className='projects'>
            <label className='section-title'>Projects:</label>
            <div>
                {Data.map((project)=>{
                    return <ProjectCard projectd={project}/>
                })}
            </div>
        </div>  
    </>);
};

export default Project;