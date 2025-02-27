import React, { useContext } from 'react'
import styles from './ContainerProfileInfo.module.css'
import imgCliente from '../../../assets/fotocliente.jpg'
import FormProfileContext from '../../../Context/FormProfileContext'

const ContainerProfileInfo = () => {
  const {handleEditClick, isEditing, handleSaveClick, stateSave } =  useContext(FormProfileContext)




  return (
    <div className={styles.ContainerProfileInfo}>
      <div  className={styles.ContainerInfo}>
      <div className={styles.ContainerInfoImg}>
        <img src={imgCliente} alt="" />
      </div>
      <div className={styles.ContainerInfoText}>
        <div className={styles.ContainerInfoTextName}>
          <p className={styles.TextName}>Kaio Dias</p>
          <p className={styles.TextEmail}>kaiudiass629@gmail.com</p>
        </div>
        <div className={styles.ContainerInfoTextId}>
          <p>ID: ajsdkajwkdjakwjd</p>
        </div>

      </div>
      </div>

      <div className={styles.ContainerBtn}>
        <div className={styles.ButtonEdit} onClick={isEditing ? handleSaveClick : handleEditClick} >
       { stateSave ? <div className={styles.Loader}></div> : <p>{isEditing ? "Salvar" : "Editar" }</p> } 

        </div>

      </div>
     
    </div>
  )
}

export default ContainerProfileInfo