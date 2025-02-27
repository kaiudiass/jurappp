import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Clientes from '../pages/Clientes';
import Loans from '../pages/Loans';
import Profile from '../pages/Profile';
import Construction from '../pages/Construction';


const AppRoutes = () => {
    return (
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/clientes" element={<Clientes/>} />
        <Route path="/emprestimo" element={<Loans/>} />
        <Route path="/pagamento" element={<Construction/>} />
        <Route path="/analise" element={<Construction/>} />
   
      </Routes>

    );
  };
  
  export default AppRoutes;