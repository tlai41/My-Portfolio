/* 
  File Name: services.jsx
  Student's Name: Tsz Ching Lai
  Student ID: 301496327
  Date: 2025-02-04
*/import React from 'react';
import ser1 from './assets/service1.jpg';
// https://tse4.mm.bing.net/th?id=OIP.EeZQNxbf-XfBFSU90oPAvQHaEu&pid=Api&P=0&h=180
import ser2 from './assets/service2.jpg';
// https://www.yittbox.com/image/database-right.jpg
import ser3 from './assets/service3.jpg';
// https://code-care.com/wp-content/uploads/2022/10/Difference-Between-A-Programming-Language-And-A-Framework-2-1.jpg
export default function Service() {
     return (
     <div>
          <h2>Services</h2>
            <div className="service">
                <h3>Web Design</h3>
                     
                <p>Creating stunning and responsive websites tailored to your needs, ensuring an engaging user experience and effective branding.</p><img src={ser1} alt="ser1" className='imageSize'/>
            </div>
            <div className="service">
                <h3>Database Development</h3>

                <p>Designing and managing databases that are secure, scalable, and optimized for performance, perfect for any application.</p>
                <img src={ser2} alt="ser2" className='imageSize'/>
            </div>
            <div className="service">
                <h3>General Programming</h3>
                <p>Offering general programming services, we can help with software development, automation scripts, and custom solutions for your specific requirements.</p>
                <img src={ser3} alt="ser3" className='imageSize'/>
            </div>
     </div>
     );
     }