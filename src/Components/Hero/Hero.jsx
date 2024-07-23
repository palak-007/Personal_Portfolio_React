import React from 'react'
import './Hero.css'
import photo from '../../assets/pic.jpeg'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Crafting Seamless Digital Experiences</h2>
            <p>
            Hello, I'm Palak, a frontend developer passionate about coding clean, efficient, and visually appealing user interfaces.
            </p>
        </div>

        <div className='hero-img'>
            <img className='photo' src={photo} />
        </div>
    </section>
  )
}

export default Hero