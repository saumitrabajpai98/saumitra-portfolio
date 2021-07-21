import React from 'react';
import './projectcard.css';

function ProjectCard( {projectd})
{
    return(
    <div className='project-card'>
        <div className='project-info'>
            <label className='project-title'>{projectd.title}</label>
            <div className='project-link'>
                <a href={projectd.github} className='specific-link'>
                    <i class="devicon-github-original-wordmark git-repoicon"></i>
                        GitHub
                </a>
            </div>
            <p>{projectd.about}</p>
            <div className='project-tags'>
                {projectd.tags.map((tag)=>{
                return (
                    <label className='tag'>
                        {tag}
                    </label>
                    )
                })}
            </div>
        </div>
        <img src={projectd.image} alt="project pic of my work" className='project-pic'/>
    </div> 
    );
};

export default ProjectCard;