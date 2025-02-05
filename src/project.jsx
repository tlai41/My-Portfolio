/* 
  File Name: project.jsx
  Student's Name: Tsz Ching Lai
  Student ID: 301496327
  Date: 2025-02-04
*/import React from 'react';
import pro1 from './assets/pro1.png';
import pro2 from './assets/pro2.png';
import pro3 from './assets/pro3.png';
export default function Project() {
     return (
     <div>
<br />

                <h2>My Projects</h2>
                <section className="projects">
                <div className="project">
                <img src={pro1} alt="Project1" className='imageSize'/>
                    <h3>My hobbies</h3>
                    <p>Static web design page</p>
                     <a href="http://studentweb.cencol.ca/tlai41/">View Project</a>
                </div>
                <div className="project">
                <img src={pro2} alt="Project2" className='imageSize'/>
                    <h3>Global warming</h3>
                    <p>A page introducing natural disaster.</p>
                    <a href="http://studentweb.cencol.ca/tlai41/Assignment2/">View Project</a>
                </div>
                <div className="project">
                <img src={pro3} alt="Project3" className='imageSize'/>
                    <h3>Mac</h3>
                    <p>A page selling Apple's product MacBook.   </p>
                    <a href="http://studentweb.cencol.ca/tlai41/Assignment3/Assignment3.html">View Project</a>
                </div>
            </section>
    </div>

     );
     }
//     "C:\2024Winter(Sem1)\Comp229WebApp\week2\TszChingLai_Comp229Assignment1ReactPortfolio\Portfolio\Portfolio\client\src\assets\pro1.png"