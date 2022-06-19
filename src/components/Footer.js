import React from 'react' 
import Twitter from '../images/Twitter-logo.png'
// import Instagram from '../images/Instagram-logo.png'
import GitHub from '../images/GitHub-logo.png'
import LinkedIn from '../images/Linkedin-logo.png'


export default function Footer() {
    return (
        <div className='Footer-container'>
         <a href='https://twitter.com/softwaredev2035' target = '_blank' rel="noreferrer" > <img alt ='Twitter' className='twitter-logo' src= {Twitter}/></a>
         {/* <img alt ='Instagram' src= {Instagram}/> */}
         <a href='https://github.com/Mussina123' target = '_blank' rel="noreferrer" > <img alt = 'Github' className='github-logo' src= {GitHub}/></a>
         <a href='https://www.linkedin.com/in/tyler-beck-webdev/' target = '_blank' rel="noreferrer" > <img alt = 'Linkedin' className='linkedin-logo' src= {LinkedIn}/></a>
        </div>  
    )}