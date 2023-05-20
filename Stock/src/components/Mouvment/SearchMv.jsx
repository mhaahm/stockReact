import React from "react";
import { FcSearch } from 'react-icons/fc'
import {FaSortDown} from 'react-icons/fa'

const SearchMv = () => {
  return (<div className="row">
    <div className="col col-md-1 mt-3">
      <span><FaSortDown/></span>
    </div>
    <div className="col">
      <select className="form-control">
        <option></option>
        <option value='in'>Entré</option>
        <option value='out'>Sortie</option>
      </select>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Référence Command" aria-label="First name"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Fournisseur" aria-label="Fournisseur"/>
    </div>
    <div className="col">
    <input type="text" className="form-control" placeholder="Reférence Article" aria-label="Reférence Article"/>
    </div>
    <div className="col">
    <input type="text" className="form-control" placeholder="Remarque" aria-label="Remarque"/>
    </div>
    <div className="col">
        <button type="submit" className="btn btn-info"><FcSearch/> Search</button>
    </div>
  </div>);
};

export default SearchMv;
