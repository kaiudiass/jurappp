import React from 'react'
import MenuDesktop from '../../components/MenuResize/MenuDesktop'
import ContainerAdjustment from '../../components/ContainerAdjustment'
import HeaderDesktop from '../../components/HeaderResize/HeaderDesktop'
import ButtonContainer from './ButtonContainer'

const Clientes = () => {
  return (
    <div>
        <MenuDesktop/>
        <ContainerAdjustment>
        <HeaderDesktop/>
        <ButtonContainer/>

        </ContainerAdjustment>
    </div>
  )
}

export default Clientes