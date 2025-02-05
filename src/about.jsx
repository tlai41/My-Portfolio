/* 
  File Name: about.jsx
  Student's Name: Tsz Ching Lai
  Student ID: 301496327
  Date: 2025-02-04
*/import React from 'react';
import me from './assets/me.png';
import cv from './assets/cv.pdf';
export default function About() {
     return (
     <div>
     <h2>About Me</h2>
     <img src={me} alt="me" className='imageSize'/>
    <p>Tsz Ching Lai</p>
    <p>I am currently studying in the Software Engineering Technician program at Centennial College. I am passionate to dedicate myself to mastering the art of coding. With a strong foundation in algorithms and data structures, I thrive on solving complex problems and building efficient solutions. My goal is to contribute to innovative projects and improve my skills in a collaborative environment.</p>
    <a href={cv} download>Download Resume</a>
     </div>
     );
    }
     //export default About;