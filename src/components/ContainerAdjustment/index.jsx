import React from 'react'
import style from './ContainerAdjustment.module.css'

const ContainerAdjustment = ({children}) => {
  return (
    <div className={style.ContainerAdjustment} >
        {children}
    </div>
  )
}

export default ContainerAdjustment