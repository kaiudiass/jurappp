import React from 'react'
import ContainerGraph from '../ContainerGraph'
import ContainerManager from '../ContainerManager'
import styles from './ContainerInfo.module.css';

const ContainerInfo = () => {
  return (
    <div className={styles.ContainerInfo}>
        <ContainerGraph/>
        <ContainerManager/>


    </div>
  )
}

export default ContainerInfo