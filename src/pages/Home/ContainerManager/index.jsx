import React from 'react'
import styles from './ContainerManager.module.css';
import ManagerGraph from '../ManagerGraph';

const ContainerManager = () => {
  return (
    <div className={styles.ContainerManage}>
      <div className={styles.ContainerManagetext}>
        <p className={styles.ManageTitle}>MOVIMENTAÇÃO DO MÊS</p>
        <p className={styles.ManageSubtitle}>valores até o momento</p>
      </div>

      <div className={styles.GraphContainer}>
         <ManagerGraph/>
      </div>
        
    </div>
  )
}

export default ContainerManager