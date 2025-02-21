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

const MenuDesktop = () => {

  const { menuAtivo} = useContext(MenuContext);
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setLarguraTela(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!menuAtivo && larguraTela <= 600) {
    return null;
  }

  return (
     
      <motion.div className={style.MenuDesktop}
      initial={{ x: "-100%" }} // Posição inicial
      animate={{ x: menuAtivo || larguraTela ? 0 : "-100%" }} // Baseado no estado
      exit={{ x: "-100%" }} // Posição ao sair
      transition={{
        duration: 0.3, // Tempo igual para entrada e saída
        
      }}
      
    >
    

        <div className={style.LogoMenuDesktop}>
        <img src={MainLogo} alt="" />

        </div>

      
        <div className={style.menuLinks}>
            <LinkComponent  to="/" name="Dashboard" icon={<RxDashboard/>}  > </LinkComponent>
                <LinkComponent  to="/5" name="Clientes" icon={<MdOutlinePersonSearch />}  > </LinkComponent>
                <LinkComponent  to="/2" name="Empréstimos" icon={<BiMoneyWithdraw/>}  > </LinkComponent>
                <LinkComponent  to="/3" name="Pagamentos" icon={<GiReceiveMoney />}  > </LinkComponent>
                <LinkComponent  to="/4" name="Analytics" icon={<IoAnalytics/>}  > </LinkComponent>
           

            </div>



    
     </motion.div>
  )
}

export default MenuDesktop