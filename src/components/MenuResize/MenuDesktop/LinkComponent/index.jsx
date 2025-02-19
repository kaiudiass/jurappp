import React from 'react'
import style from './LinkComponent.module.css'
import { Link, useLocation } from 'react-router-dom'

const LinkComponent = ({ to, name, icon }) => {

  
    const location = useLocation();
    const buttonClass = location.pathname === to ? style.activeButton : style.defaultButton;
   

    return (
        <div className={style.menuLinks}>
             
            <Link to={to} className={style.LinkExtendido } >
            <div   style={{ display: location.pathname === to ? "flex" : "none" }} >
                <div className={style.trianguloEsquerda}></div>
                </div>
            
                <div className={` ${style.linkinfo}  ${buttonClass} `}>
                    <div className={style.icon}>
                        {icon}
                    </div>

                    <div  className={style.name} >
                        {name}
                    </div>
                </div>
               
            </Link>
        </div>
    )
}

export default LinkComponent
