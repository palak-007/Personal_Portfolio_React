import React from 'react'
import './AboutMe.css'
import photo from '../../assets/pic-2.jpeg'

const AboutMe = () => {
    return (
        <section className='about-me-container' id='about-section'>
            <h5>About Me</h5>

            <div className="about-me-content">
                <div className='about-img'>
                    <img className='about-photo' src={photo} />
                </div>
                <div className="about-info">
                    <p>
                        Hi! I’m Palak, a dedicated student with a keen interest in front-end web development.<br/>
                         I’m currently pursuing my Masters at NIT Warangal and have a strong passion for designing and developing engaging web interfaces. <br/>
                         Proficient in HTML, CSS, and JavaScript, I also work with React to create responsive and dynamic websites.<br/>
                          I’m always eager to learn and take on new challenges, constantly improving my skills through practical projects.
                    </p>
                    <a href='./assets/CV.pdf'><button>Download CV</button></a>
                </div>
            </div>

        </section>
    )
}

export default AboutMe