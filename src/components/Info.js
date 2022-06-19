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
                <a href='https://tylerbeck-webdev.netlify.app/' target= '_blank' rel="noreferrer" > 
                <h6 className='portfolio'>tylerbeck-webdev.netlify.app
                </h6>
                </a>
                <div className='button-container'> 
                   <a href='mailto:softwaretpd2035@gmail.com'> <img src= {EmailButton} className='Email-button' alt='email'/></a>
                    <a href='https://www.linkedin.com/in/tyler-beck-webdev/' target="_blank" rel="noreferrer" > 
                    <img src= {LinkedInButton} className='Linkedin-button' alt='Linkedin'/>
                    </a>
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

    // document.querySelector('.Email-button').addEventListener('click', email)

    // function email() {
    //     return 
    // }