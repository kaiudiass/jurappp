import React from 'react'
import Card from './Card'
import style from './ContainerCard.module.css'
import imgCard from '../../../assets/Icon_Order.svg'
import imgCard1 from '../../../assets/Icon_Order1.svg'
import imgCard2 from '../../../assets/Icon_Order2.svg'
import imgCard3 from '../../../assets/Icon_Order3.svg'

const ContainerCard = () => {
  return (
    <div className={style.ContainerCard}>
        <Card img={imgCard} name={"Clientes"} number={15} />
        <Card img={imgCard1} name={"Ativos"} number={75} />
        <Card img={imgCard2} name={"Pendentes"} number={75} />
        <Card img={imgCard3} name={"Atrasados"} number={75} />
       
    </div>
  )
}

export default ContainerCard