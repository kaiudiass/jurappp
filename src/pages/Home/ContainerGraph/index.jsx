import React from 'react'
import GraphDashboard from '../GraphDashboard'
import styles from './ContainerGraph.module.css';

const ContainerGraph = () => {
  return (
    <div className={styles.ContainerGraph}>
      <div>
        <p>ESTATISTICAS</p>
      </div>
        <GraphDashboard/>
    </div>
  )
}

export default ContainerGraph