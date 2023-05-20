import React from 'react'
import SearchMv from './SearchMv'
import MouvementList from './MouvementList'
import MouvementForm from './MouvementForm'

const Mouvment = () => {
  return (
    <>
       <SearchMv /> 
       <MouvementList/>
       <MouvementForm/>
    </>
  )
}

export default Mouvment