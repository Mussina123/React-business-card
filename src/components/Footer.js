import React from 'react' 
import Twitter from '../images/Twitter-logo.png'
import Instagram from '../images/Instagram-logo.png'
import GitHub from '../images/GitHub-logo.png'
import LinkedIn from '../images/Linkedin-logo.png'


export default function Footer() {
    return (
        <div className='Footer-container'>
         <img alt ='Twitter' src= {Twitter}/>
         <img alt ='Instagram' src= {Instagram}/>
         <img alt = 'Github' src= {GitHub}/>
         <img alt = 'Linkedin' src= {LinkedIn}/>
        </div>  
    )}