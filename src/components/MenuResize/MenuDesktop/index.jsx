import React, { useContext, useEffect, useState } from 'react'
import style from './MenuDesktop.module.css'
import LinkComponent from './LinkComponent'
import { FaGear } from "react-icons/fa6";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { ImFilm } from "react-icons/im";
import { PiTelevision } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePersonSearch } from "react-icons/md";
import MainLogo from '../../../assets/MainLogo.png'
import { FaSheetPlastic } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { IoAnalytics } from "react-icons/io5";
import MenuContext from '../../../Context/MenuContext';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const MenuDesktop = () => {

  const { menuAtivo, larguraTela} = useContext(MenuContext);


  if (!menuAtivo && larguraTela <= 600) {
   return null;
  }


  return (
     
      <motion.div className={style.MenuDesktop}
      initial={{ x: larguraTela > 600 ? 0 : "-100%" }} 
      animate={{ x: menuAtivo || larguraTela ? 0 : "-100%" }} 
      exit={{ x:  larguraTela > 600 ? 0 : "-100%" }} 
      transition={{
        duration: 0.3, 
        
      }}
      
    >
        <Link to={"/"} className={style.LogoMenuDesktop}>
        <img src={MainLogo} alt="" />

        </Link>

      
        <div className={style.menuLinks}>
            <LinkComponent  to="/" name="Dashboard" icon={<RxDashboard/>}  > </LinkComponent>
                <LinkComponent  to="/clientes" name="Clientes" icon={<MdOutlinePersonSearch />}  > </LinkComponent>
                <LinkComponent  to="/emprestimo" name="Empréstimos" icon={<BiMoneyWithdraw/>}  > </LinkComponent>
                <LinkComponent  to="/pagamento" name="Pagamentos" icon={<GiReceiveMoney />}  > </LinkComponent>
                <LinkComponent  to="/analise" name="Analytics" icon={<IoAnalytics/>}  > </LinkComponent>
           

            </div>



    
     </motion.div>
  )
}

export default MenuDesktop