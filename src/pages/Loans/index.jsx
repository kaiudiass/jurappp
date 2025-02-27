import React from 'react'
import MenuDesktop from '../../components/MenuResize/MenuDesktop'
import ContainerAdjustment from '../../components/ContainerAdjustment'
import HeaderDesktop from '../../components/HeaderResize/HeaderDesktop'
import ButtonContainer from '../../components/ButtonContainer'
import SeachContainer from '../../components/SeachContainer'
import ContainerLoansList from './ContainerLoansList'


const Loans = () => {
  return (
    <div>
        <MenuDesktop/>
        <ContainerAdjustment>
        <HeaderDesktop/>
        <ButtonContainer nome={"CRIAR EMPRÉSTIMO"}/>
        <SeachContainer searchplace={"Nome, situação, valor emprestado"}/>
        <ContainerLoansList/>

        </ContainerAdjustment>
    </div>
  )
}

export default Loans