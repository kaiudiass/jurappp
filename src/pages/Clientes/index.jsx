import React from 'react'
import MenuDesktop from '../../components/MenuResize/MenuDesktop'
import ContainerAdjustment from '../../components/ContainerAdjustment'
import HeaderDesktop from '../../components/HeaderResize/HeaderDesktop'
import ButtonContainer from '../../components/ButtonContainer'
import SeachContainer from '../../components/SeachContainer'
import ContainerClientList from './ContainerClientList'

const Clientes = () => {
  return (
    <div>
        <MenuDesktop/>
        <ContainerAdjustment>
        <HeaderDesktop/>
        <ButtonContainer nome={"CRIAR CLIENTE"}/>
        <SeachContainer/>
        <ContainerClientList/>

        </ContainerAdjustment>
    </div>
  )
}

export default Clientes