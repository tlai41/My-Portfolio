/* 
  File Name: contact.jsx
  Student's Name: Tsz Ching Lai
  Student ID: 301496327
  Date: 2025-02-04
*/

import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Your message has been sent!");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact">
            {/* Contact Information */}
            <section className="contact-info">
                <h2>Contact Information</h2>
                <p>Email: <a href="mailto:tlai41@my.centennialcollege.ca">tlai41@my.centennialcollege.ca</a></p>
         <p>Phone: <a href="tel:+14377662867">(437) 766-2867</a></p>
            </section>

            {/* Message Form */}
            <section className="contact-form">
                <h2>Send a Message</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Please Input Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Please Input Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Please Input Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;