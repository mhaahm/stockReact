import React from "react";
import {FcSearch} from 'react-icons/fc'

const MovementLine = () => {
    
    return <>
       <div className="col-md-2">
            <button className="btn btn-success"> <FcSearch/> Rechercher</button>
       </div>
       <div className="col-md-3">
            <select className="form-control">
                <option></option>
            </select>
       </div>
       <div className="col-md-2">
            <input type="text" className="form-control"/>
       </div>
       <div className="col-md-2">
            <input type="text" className="form-control"/>
       </div>
       <div className="col-md-3">
            <input type="text" className="form-control"/>
       </div>
    </>
}

export default MovementLine;