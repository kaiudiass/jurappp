import React from 'react'
import style from './Home.module.css'
import MenuDesktop from '../../components/MenuResize/MenuDesktop'
import HeaderDesktop from '../../components/HeaderResize/HeaderDesktop'
import ContainerAdjustment from '../../components/ContainerAdjustment'
import ContainerCard from './ContainerCard'
import GraphDashboard from './GraphDashboard'
import ContainerGraph from './ContainerGraph'
import ContainerInfo from './ContainerInfo'

const Home = () => {
  return (
    <div className={style.home} >
    <MenuDesktop/>

    <ContainerAdjustment>
    <HeaderDesktop/>
    <ContainerCard/>
    <ContainerInfo/>



    </ContainerAdjustment>
    
    

    </div>
  )
}

export default Home