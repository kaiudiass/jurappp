import React from 'react'
import MenuDesktop from '../../components/MenuResize/MenuDesktop'
import ContainerAdjustment from '../../components/ContainerAdjustment'
import HeaderDesktop from '../../components/HeaderResize/HeaderDesktop'
import ContainerProfileInfo from './ContainerProfileInfo'
import ContainerInput from './ContainerInput'

const Profile = () => {
  return (
    <div >
         <MenuDesktop/>

        <ContainerAdjustment>
        <HeaderDesktop/>
        <ContainerProfileInfo/>
        <ContainerInput/>
        


        </ContainerAdjustment>
    </div>
  )
}

export default Profile