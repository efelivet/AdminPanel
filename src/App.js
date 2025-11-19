import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './Home'
import DashStats from './DashStats';
import Analysis from './Analysis';

function App() {


  return (
        <>
        <BrowserRouter>
        <Routes>
          <Route path ="/" element ={<Home/>}/> 
          <Route path ="/dashStats" element ={<DashStats/>}/> 
          <Route path ="/analysis" element ={<Analysis/>}/> 
        </Routes>
        </BrowserRouter>
        </>
         )
}

export default App;
