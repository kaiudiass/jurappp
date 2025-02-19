import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';


const AppRoutes = () => {
    return (
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/5" element={<Home/>} />
        <Route path="/2" element={<Home/>} />
        <Route path="/3" element={<Home/>} />
   
      </Routes>

    );
  };
  
  export default AppRoutes;