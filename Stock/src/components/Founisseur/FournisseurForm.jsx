import React from 'react'

const FournisseurForm = () => {
  return (
    <div className='row mt-3'>
        <div className='col-md-3' style={ {borderTop: 'solid 7px',width: '24%',borderRight:"solid 7px",marginLeft: '11px',paddingTop: "26px"}}>
            <div className='row'>
                <div className='col-md-3'>Group</div>
                <div className='col-md-9'>
                    <select className='form-control'>
                        <option value='client'>
                            Client
                        </option>
                        <option value='fournisseur'>
                            Fournisseur
                        </option>
                    </select>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-md-3'>Civilité</div>
                <div className='col-md-9'>
                   <input type='text' className='form-control'/>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-md-3'>Nom</div>
                <div className='col-md-9'>
                   <input type='text' className='form-control'/>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-md-3'>Prénom</div>
                <div className='col-md-9'>
                   <input type='text' className='form-control'/>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-md-3'>Entreprise</div>
                <div className='col-md-9'>
                   <input type='text' className='form-control'/>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-md-3'>Service</div>
                <div className='col-md-9'>
                   <input type='text' className='form-control'/>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-md-3'>Fonction</div>
                <div className='col-md-9'>
                   <input type='text' className='form-control'/>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-md-3'>Email</div>
                <div className='col-md-9'>
                   <input type='email' className='form-control'/>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-md-3'>Site Internet</div>
                <div className='col-md-9'>
                   <input type='email' className='form-control'/>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-md-3'>Date naissance</div>
                <div className='col-md-9'>
                   <input type='date' className='form-control'/>
                </div>
            </div>
        </div>
        <div className='col-md-9'>
            <div className='row' style={{ width: '100%' }}>
                <div className='col-md-6' style={ {borderRight: "solid 7px",borderTop:"solid 7px"}}>
                    <div className='row mb-2'>Bureau</div>
                    <div className='row mb-2'>
                        <div className='col-md-3'>Rue</div>
                        <div className='col-md-8'>
                            <input type='text' className='form-control'/>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-3'>Code postal</div>
                        <div className='col-md-8'>
                            <input type='text' className='form-control'/>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-3'>Ville</div>
                        <div className='col-md-8'>
                            <input type='text' className='form-control'/>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-3'>Téléphone</div>
                        <div className='col-md-8'>
                            <input type='text' className='form-control'/>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-3'>Fax</div>
                        <div className='col-md-8'>
                            <input type='text' className='form-control'/>
                        </div>
                    </div>
                </div>
                <div className='col-md-6' style={ {borderTop:"solid 7px"}}>
                    <div className='row mb-2'>Domicile</div>
                    <div className='row mb-2'>
                        <div className='col-md-3'>Rue</div>
                        <div className='col-md-8'>
                            <input type='text' className='form-control'/>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-3'>Code postal</div>
                        <div className='col-md-8'>
                            <input type='text' className='form-control'/>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-3'>Ville</div>
                        <div className='col-md-8'>
                            <input type='text' className='form-control'/>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-3'>Téléphone</div>
                        <div className='col-md-8'>
                            <input type='text' className='form-control'/>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-3'>Fax</div>
                        <div className='col-md-8'>
                            <input type='text' className='form-control'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row' style={ {borderTop: "solid 7px", width: '100%'}}>
                <div className='form-group row pt-5'>
                     <label className='col-sm-2 col-form-label'>Notes</label> 
                    <div className='col-md-10'>
                        <textarea  className='form-control' rows={10}/>
                    </div>
                </div>
            </div>
            <div className='row' style={ {borderTop: 'solid 7px',marginTop: "26px",width: "100%",paddingTop:"10px"}}>
                <div className='col-md-12' style={ {display: 'flex', justifyContent: "end"} }>
                   <button className='btn btn-info'>Nouveau</button>
                   <button className='btn btn-warning'>Fermer</button>
                   <button className='btn btn-danger'>Supprimer</button>
                   <button className='btn btn-success'>Enregistrer</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FournisseurForm