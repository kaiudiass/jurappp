import React from 'react'
import HeaderDesktop from '../../components/HeaderResize/HeaderDesktop'
import ContainerAdjustment from '../../components/ContainerAdjustment'
import MenuDesktop from '../../components/MenuResize/MenuDesktop'
import style from './Construction.module.css'

const Construction = () => {
    return (
        <div>

            <MenuDesktop />

            <ContainerAdjustment>
                <HeaderDesktop />

                <div className={style.Construction} >
                    PAGINA EM CONSTRUÇÃO
                </div>
            </ContainerAdjustment>



        </div>
    )
}

export default Construction