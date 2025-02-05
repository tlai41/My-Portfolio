/* 
  File Name: App.jsx
  Student's Name: Tsz Ching Lai
  Student ID: 301496327
  Date: 2025-02-04
*/import React from 'react';
import NavBar from './components/NavBar/navbar';


import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'

const App = () => {
 return (
//      <div className="App">
//  <NavBar />
// </div>
 <Router>

 <MainRouter />


 </Router>
 );
};

export default App;
