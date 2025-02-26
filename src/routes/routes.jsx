import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Clientes from '../pages/Clientes';
import Loans from '../pages/Loans';


const AppRoutes = () => {
    return (
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/clientes" element={<Clientes/>} />
        <Route path="/emprestimo" element={<Loans/>} />
        <Route path="/3" element={<Home/>} />
   
      </Routes>

    );
  };
  
  export default AppRoutes;