import React from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import {GrDocumentUpdate} from "react-icons/gr";
import {BsDatabaseAdd} from "react-icons/bs";

const MouvementList = () => {
  return (<>
    <div className="row mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Fournisseur</th>
            <th>Reférence Article</th>
            <th>Remarque</th>
            <th>Quantité</th>
            <th>Prix/Unité</th>
            <th>Prix/Total</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    <div className=" form-group row mt-3">
      <label className="col-sm-1 col-form-label">Mvm. du</label>
      <div className="col-md-2">
        <input type="date" name="search_date" className="form-control"/>
      </div>
      <label className="col-sm-1 col-form-label">Au</label>
      <div className="col-md-2">
        <input type="date" name="search_date" className="form-control"/>
      </div>
      <div className="col-md-6" style={{
          display: "flex",
          justifyContent: "end"
        }}>
        <button className="btn btn-danger">
          <RiDeleteBin6Line/>
          Supprimer le mvm.
        </button>
        <button className="btn btn-info">
          <GrDocumentUpdate/>
          Modifier le mvm.
        </button>
        <button className="btn btn-success">
          <BsDatabaseAdd/>
          Ajouter Un mvm.
        </button>
      </div>
    </div>
  
  </>);
};

export default MouvementList;
