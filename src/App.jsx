import React from 'react';

import './App.css';
import NavBar from './Components/NavBar';
//FuncComp - alias - start with an Uppercase
import FuncComp from './Components/Functional';
import ClassComp from './Components/ClassComponent';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <NavBar/>
      
     <Routes>
      <Route path="funcom" element={<FuncComp/>}></Route>
      <Route path="classcom" element={<ClassComp/>}></Route>
      </Routes>
    </div>
  )
}


export default App;