import React, { useContext, useState } from 'react'
import styles from './ContainerInput.module.css';
import FormProfileContext from '../../../Context/FormProfileContext';

const ContainerInput = () => {

   const {isEditing, setIsEditing,formData, setFormData, userInfo, handleSave,handleEditClick ,handleChange, handleSaveClick } =  useContext(FormProfileContext)


  return (
    <form>
            <div className={styles.formGroup}>
                <div className={styles.inputPair}>
                    <div className={styles.inputContainer}>
                        <label>Nome</label>
                        <input type="text"  name="Name"  placeholder={userInfo.Name} className={styles.inputField}   onChange={handleChange}
                     disabled={!isEditing} value={formData.Name} />
                    </div>
                    <div className={styles.inputContainer}>
                    <label>Sobrenome</label>
                        <input type="text" name="Sobrenome"  placeholder={userInfo.Sobrenome} className={styles.inputField}  onChange={handleChange}
                    disabled={!isEditing}  value={formData.Sobrenome} />
                    </div>
                </div>
                <div className={styles.inputPair}>
                    <div className={styles.inputContainer}>
                    <label>Cidade</label>
                        <input type="text"   name="Cidade" placeholder={userInfo.Cidade} className={styles.inputField} 
                    onChange={handleChange} disabled={!isEditing} value={formData.Cidade}/>
                    </div>
                    <div className={styles.inputContainer}>
                    <label>Endereço</label>
                        <input type="text" name="Endereço"  placeholder={userInfo.Endereço} className={styles.inputField} 
                    onChange={handleChange} disabled={!isEditing}   value={formData.Endereço}/>
                    </div>
                </div >
                <div className={styles.inputPair}>
                    <div className={styles.inputContainer}>
                        <label>Email</label>
                        <input type="email"  name="Email" placeholder={userInfo.Email} className={styles.inputField}    
                    onChange={handleChange} disabled={!isEditing} value={formData.Email}/>
                    </div>
                    <div className={styles.inputContainer}>
                    <label>Senha</label>
                        <input type="password" name="Senha" placeholder="Digite sua nova senha"  className={styles.inputField} 
                        onChange={handleChange}disabled={!isEditing} value={formData.Senha} />
                    </div>
                </div>
            </div>
        </form>
  )
}

export default ContainerInput