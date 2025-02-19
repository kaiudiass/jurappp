import React from 'react'
import style from './Card.module.css'


const Card = ({img, name, number,}) => {
  return (
    <div className={style.Card}>
      <div className={style.CardImg}>
        <img src={img} alt="" />

      </div>

      <div className={style.CardInfo}>
        <div className={style.CardInfoNumber}>
          {number}
        </div>
        <div className={style.CardInfoName}>
          {name}

        </div  >

        

      </div>

    </div>
  )
}

export default Card