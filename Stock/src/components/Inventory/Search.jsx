import React from "react";
import { FcSearch } from 'react-icons/fc'

const Search = () => {
  return (<div className="row">
    <div className="col">
      <select className="form-control">
        <option>Select Catégorie</option>
      </select>
    </div>
    <div className="col">
      <select className="form-control">
        <option>Select Emplacement</option>
      </select>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Référence" aria-label="First name"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Désignation" aria-label="First name"/>
    </div>
    <div className="col">
      <select className="form-control">
        <option value="1">Article en stock</option>
        <option value="2">Article bientôt épuisé</option>
        <option value="3">Article épuisé</option>
      </select>
    </div>
    <div className="col">
        <button type="submit" className="btn btn-info"><FcSearch/> Search</button>
    </div>
  </div>);
};

export default Search;
