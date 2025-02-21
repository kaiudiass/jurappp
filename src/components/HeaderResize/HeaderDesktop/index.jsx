import React, { useContext } from 'react'
import style from './HeaderDesktop.module.css'
import { GoGear } from "react-icons/go";
import { RiNotification2Line } from "react-icons/ri";
import imgCliente from '../../../assets/fotocliente.jpg'
import MenuContext from '../../../Context/MenuContext';

const HeaderDesktop = () => {

  const { menuAtivo, scrolled, alternarMenu} = useContext(MenuContext)


  return (
    <div className={ `${style.HeaderDesktop} ${scrolled ? style.backgroundHeaderScroll : ''}`}>
      <div className={style.containerMenu} >

      
       <button
          className={`${style.btnMenu} ${menuAtivo ? style.botaoX : ''} ${scrolled ? style.botaoScrolled : ''}` } // Aplica a classe condicionalmente
          onClick={alternarMenu} 
        >
          <span className={style.linha}></span>
          <span className={`${style.linha} ${style.linhaMeio}`}></span>
          <span className={style.linha} ></span>
        </button> 
        </div>

      <div className={style.HeaderContainer}>

     

        
        <div className={style.HeaderButtonContainer}>

          <div className={style.HeaderIcon}>
            <RiNotification2Line />
          </div>

          <div className={style.HeaderIcon}>
            <GoGear />
          </div>
        </div>

        <div >
          <div className={style.LinhaVertical}></div>
        </div>

        <div className={style.HeaderInfo}>
          <div className={style.HeaderInfoName}>
            {/* receberar nome da pessoa pelo context */}
            <p>Olá, <span>Kaio</span></p>
          </div>

          <div className={style.HeaderInfoImg}>
            <img src={imgCliente} alt="" />

          </div>

        </div>

      </div>
    </div>
  )
}

export default HeaderDesktop