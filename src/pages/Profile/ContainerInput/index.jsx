import React from 'react'
import styles from './ContainerInput.module.css';

const ContainerInput = () => {
  return (
    <form>
            <div className={styles.formGroup}>
                <div className={styles.inputPair}>
                    <div>
                       
                        <input type="text"  placeholder="Kaio" className={styles.inputField} />
                    </div>
                    <div>
                    
                        <input type="text"  placeholder="Dias" className={styles.inputField} />
                    </div>
                </div>
                <div className={styles.inputPair}>
                    <div>
                        
                        <input type="text"  placeholder="Divisópolis" className={styles.inputField} />
                    </div>
                    <div>
                        
                        <input type="text"   placeholder="Eudes Mendes 112" className={styles.inputField} />
                    </div>
                </div>
                <div className={styles.inputPair}>
                    <div>
                      
                        <input type="email"  placeholder="kaiod629@gmail.com" className={styles.inputField} />
                    </div>
                    <div>
                       
                        <input type="password"  placeholder="Digite sua nova senha"  className={styles.inputField} />
                    </div>
                </div>
            </div>
        </form>
  )
}

export default ContainerInput