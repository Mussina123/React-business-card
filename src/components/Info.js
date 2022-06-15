import React from 'react' 
// import Profile from '../images/Profile-img.png'
import EmailButton from '../images/Button-email.png'
import LinkedInButton from '../images/Button-linkedin.png'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'
import Profile from '../images/TB-business-card.png'

export default function Info() {
    return (
        <div className='Card-Container'>
            <img src= {Profile} className='profile-img' alt='Profile-Img'/> 
            <div className='middle-container'>
                <h1 className='profile-h1'> Tyler Beck</h1>
                <h3 className='job-title'>Frontend Engineer </h3>
                <h6 className='email'>https://tylerbeck-webdev.netlify.app/</h6>
                <div className='button-container'> 
                    <img src= {EmailButton} className='Email-button' alt='email'/>
                    <img src= {LinkedInButton} className='Linkedin-button' alt='email'/>
                </div>
                <div className='About-container'> 
                    <About />
                </div> 
                <div> 
                    <Interests /> 
                </div>
            </div>
            <div> 
                    <Footer /> 
                </div>
        </div>  
    )}