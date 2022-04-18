import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Dash from './components/Dash';




function App() {
  return (
    <>
    
   
    <br />
    
    <div>

            <Routes>
            <Route index path='/' element={<Nav />}  />
            <Route path='Dash' element={<Dash />}  />
           
              
            
            
              </Routes>
            
          
              </div>
         
          
          
           
            
      
      
  
            
            
       
          
            </>
    
  );
}

export default App;
