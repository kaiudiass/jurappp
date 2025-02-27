import React from 'react'
import style from './SeachContainer.module.css'
import { FaSearch } from 'react-icons/fa'

const SeachContainer = ({searchplace}) => {
  return (
    <div className={style.searchContainer}>

    <div className={style.InputSeach}>
    <input type="text" placeholder={searchplace} />
    <button className={style.searchButton}>
      <FaSearch />
      Buscar
    </button>
    </div>
  </div>
  )
}

export default SeachContainer 