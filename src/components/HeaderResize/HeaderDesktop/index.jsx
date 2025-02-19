import React from 'react'
import style from './HeaderDesktop.module.css'
import { GoGear } from "react-icons/go";
import { RiNotification2Line } from "react-icons/ri";
import imgCliente from '../../../assets/fotocliente.jpg'

const HeaderDesktop = () => {
  return (
    <div className={style.HeaderDesktop}>
     <div className={style.HeaderContainer}>
      <div className={style.HeaderButtonContainer}>

      <div className={style.HeaderIcon}>
        <RiNotification2Line />
        </div>

        <div className={style.HeaderIcon}>
          <GoGear/>
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