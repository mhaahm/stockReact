import React from 'react'
import MovementLine from './MouvementLine'
import {FcSearch} from 'react-icons/fc'
import {GiCancel} from 'react-icons/gi'
import {AiOutlineSave} from 'react-icons/ai'

const MouvementForm = () => {

  const lines = [<MovementLine/>,<MovementLine/>,<MovementLine/>,<MovementLine/>,<MovementLine/>,<MovementLine/>] 

  return (
      <>
        <div className='row mt-4'>
            <h2>Ajouter un Mouvememnt</h2>
            <div className='row mt-1'>
                  <div className="col-md-5">
                  Article (vous pouvez entrer jusqu'a 6 articles en même temps)
                  </div>
                  <div className="col-md-2">
                        Quantité
                  </div>
                  <div className="col-md-2">
                        Prix / Unité
                  </div>
                  <div className="col-md-3">
                        Remarque
                  </div>
            </div>
            {lines.map((elm,index) => ( <div className='row mt-1' key={index}>{elm}</div> ))}
        </div>
        <div className='row mt-2'>
            <div className="form-group row pt-2">
                <label htmlFor="inputPassword" className="col-sm-1 col-form-label">Type</label>
                <div className="col-sm-1 option-add">
                   <select className='form-control'>
                       <option value="in">
                           Entre
                       </option>
                       <option value="out">
                           Sortie
                       </option>
                   </select>
                </div>
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Référence commande</label>
                <div className="col-sm-2 option-add">
                   <input type='text' className='form-control'/>
                </div>
                <label htmlFor="inputPassword" className="col-sm-1 col-form-label">Ajouté par</label>
                <div className="col-sm-2 option-add">
                   <input type='text' className='form-control'/>
                </div>
                <label htmlFor="inputPassword" className="col-sm-1 col-form-label">Date</label>
                <div className="col-sm-2 option-add">
                   <input type='date' className='form-control'/>
                </div>
            </div>
        </div>
        <div className='row mt-2'>
            <div className="form-group row pt-2">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Fournisseur / Client</label>
                <button type="submit" className="btn btn-info col-sm-2"><FcSearch/> Rechercher</button>
                <div className="col-sm-7 option-add">
                   <select className='form-control'>
                       <option value="in">
                           Select client
                       </option>
                   </select>
                </div>
            </div>
         </div>
         <div className='row mt-2'>
            <div className='col-md-12' style={{display: "flex", justifyContent: "end"}}>
                  <button className='btn btn-danger'><GiCancel/>Annuler</button>
                  <button className='btn btn-success'><AiOutlineSave/> Enregistrer</button>
            </div>
            
         </div>
        </>
  )
}

export default MouvementForm