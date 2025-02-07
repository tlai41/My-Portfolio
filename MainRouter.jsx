/* 
  File Name: MainRouter.jsx
  Student's Name: Tsz Ching Lai
  Student ID: 301496327
  Date: 2025-02-04
*/
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Service from './src/services'
import Project from './src/project'
import Layout from './components/Layout'

const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
 <Route exact path="/" element={<Home />} />
 <Route exact path="/about" element={<About />} />
 <Route exact path="/services" element={<Service />} />
 <Route exact path="/project" element={<Project />} />
 <Route exact path="/contact" element={<Contact />} />
 
 </Routes>
 </div>
)
}
export default MainRouter
