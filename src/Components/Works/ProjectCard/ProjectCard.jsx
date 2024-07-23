import React, { useState } from 'react'
import './ProjectCard.css'

const ProjectCard = ({ info }) => {

    const [state, setState] = useState('false');

    function handleClick(){
        if(state === 'false')
            setState('true')
        else
            setState('false')
    }
    return (
        <>
            <div className="project-card">

                <h6>{info.title}</h6>
                <img src={info.img} />

                <div className="links">
                    <div className="repo-div">
                        <a href={info.repo} target='_blank'>GitHub Repo</a>
                    </div>
                    <div className="url-div">
                        <a href={info.demoURL} target='_blank'>Live URL</a>
                    </div>
                    <div onClick={handleClick} style={{cursor:'pointer'}}>see more</div>
                </div>

                <div className={state}>
                <div className="tech">
                    <h6 id='tech'>Tech Used:</h6>
                    <div className="tech-content">
                        {
                            info.tech.map((item) => (
                                <div>{item}</div>
                            ))
                        }
                    </div>
                </div>

                <ul>
                    {info.details.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                </div>

            </div>
        </>
    )
}

export default ProjectCard