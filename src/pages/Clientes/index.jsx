import React from 'react'
import MenuDesktop from '../../components/MenuResize/MenuDesktop'
import ContainerAdjustment from '../../components/ContainerAdjustment'
import HeaderDesktop from '../../components/HeaderResize/HeaderDesktop'
import ButtonContainer from './ButtonContainer'
import SeachContainer from './SeachContainer'
import ContainerClientList from './ContainerClientList'

const Clientes = () => {
  return (
    <div>
        <MenuDesktop/>
        <ContainerAdjustment>
        <HeaderDesktop/>
        <ButtonContainer/>
        <SeachContainer/>
        <ContainerClientList/>

        </ContainerAdjustment>
    </div>
  )
}

export default Clientes