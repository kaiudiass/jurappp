import React from 'react'
import style from './Home.module.css'
import MenuDesktop from '../../components/MenuResize/MenuDesktop'
import HeaderDesktop from '../../components/HeaderResize/HeaderDesktop'
import ContainerAdjustment from '../../components/ContainerAdjustment'
import ContainerCard from './ContainerCard'

const Home = () => {
  return (
    <div className={style.home} >
    <MenuDesktop/>

    <ContainerAdjustment>
    <HeaderDesktop/>
    <ContainerCard/>


    </ContainerAdjustment>
    
    

    </div>
  )
}

export default Home