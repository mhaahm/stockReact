import React from 'react'
import SearchF from './SearchF.jsx'
import FournisseurList from './FournisseurList' 
import FournisseurForm from './FournisseurForm'

const Fournisseur = () => {
  return (
    <>
        <SearchF/>
        <FournisseurList />
        <FournisseurForm/>
    </>
  )
}

export default Fournisseur