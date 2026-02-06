import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home'className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Nikita shah, </span>Frontend developer based in INDIA.</h1>
        <p>Full Stack Developer | Passionate about building scalable web apps with clean design and modern technologies. </p>
        <div className="hero-action">
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink> </div>
        <div className='hero-resume'> My resume</div>
        </div>

    </div>
  )
}

export default Hero