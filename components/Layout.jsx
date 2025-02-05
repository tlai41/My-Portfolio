/* 
  File Name: Layout.jsx
  Student's Name: Tsz Ching Lai
  Student ID: 301496327
  Date: 2025-02-04
*/import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../src/assets/logo1.png";
import  "../src/index.css";
export default function Layout() {
 return (
 <>
 
 <h1><img src={logo} alt="logo" className="logo"/> My Portfolio</h1>
 <nav>
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/project">Project</Link> |  <Link to="/services">Service</Link> | <Link to="/contact">Contact</Link>
 </nav>
<br/>
 {/* <hr /> */}
 
</>
 
 );
}
