/* 
  File Name: Home.jsx
  Student's Name: Tsz Ching Lai
  Student ID: 301496327
  Date: 2025-02-04
*/
import React from'react';
import '../src/index.css';
// import bg from '../src/assets/image.png';

export default function Home() {
     return(
          <div className="home">
            <section className="hero">
                <h2>Welcome to My Portfolio</h2>
                <p>Building the Future, One Line at a Time</p>
            </section>

            <section className="features">
                <h2>What I Offer</h2>
                <div className="feature">
                    <h3>Web Design</h3>
                    <p>Stunning and responsive designs tailored to your needs.</p>
                </div>
                <div className="feature">
                    <h3>Database Development</h3>
                    <p>Secure and scalable database solutions for your applications.</p>
                </div>
                <div className="feature">
                    <h3>General Programming</h3>
                    <p>Custom programming services to meet your specific requirements.</p>
                </div>
            </section>

            {/* Testimonials Section */}
            {/* <section className="testimonials">
                <h2>What Clients Say</h2>
                <blockquote>
                    "An amazing experience! Highly recommend."
                    <footer>- Happy Client</footer>
                </blockquote>
                <blockquote>
                    "Professional and reliable. Will work with again!"
                    <footer>- Satisfied Customer</footer>
                </blockquote>
            </section> */}

            
            <section className="cta">
                <h2>Ready to Get Started?</h2>
                <button className="button">Contact Me</button>
            </section>
        </div>
     );
     }
    