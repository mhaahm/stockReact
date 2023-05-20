import React from "react";
import { FcSearch } from 'react-icons/fc'

const SearchF = () => {
  return (<div className="row mt-3">
    <div className="col">
      <select className="form-control">
        <option>Select Group</option>
      </select>
    </div>
    <div className="col">
     <input type="text" className="form-control" placeholder="nom"/>
    </div>
    <div className="col">
     <input type="text" className="form-control" placeholder="prénom"/>
    </div>
    <div className="col">
     <input type="text" className="form-control" placeholder="entreprise"/>
    </div>
    <div className="col">
     <input type="text" className="form-control" placeholder="fonction"/>
    </div>
    <div className="col">
     <input type="text" className="form-control" placeholder="email"/>
    </div>
    <div className="col">
        <button type="submit" className="btn btn-info"><FcSearch/> Search</button>
    </div>
  </div>);
};

export default SearchF;
