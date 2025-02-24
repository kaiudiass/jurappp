import React from 'react'
import styles from './ButtonContainer.module.css';
import { FaPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const ButtonContainer = () => {
  return (
    <div className={styles.ButtonContainer}>

        <div className={styles.ButtonReload}>
        <TfiReload />
        </div>
        
        <div className={styles.ButtonCreateClient}>
        
          <p> <span><FaPlus/></span>CRIAR CLIENTE</p>

        </div>
      



    </div>
  )
}

export default ButtonContainer