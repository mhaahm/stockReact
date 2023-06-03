import React,{useRef} from "react";
import Search from "./Search";
import InventoryList from "./InventoryList";
import InventoryForm from "./InventoryForm";
import InventoryNote from "./InventoryNote";
import {RiDeleteBin6Line} from 'react-icons/ri'
import {GrDocumentUpdate} from 'react-icons/gr'
import {BsDatabaseAdd} from 'react-icons/bs'

const Inventory = () => {

 const formRef = useRef()
 const listRef = useRef()
 const noteRef = useRef()


  return (<div className="row mt-3 col-md-12" style={{marginLeft: '13px'}}>
    <Search/>
    <InventoryList ref={listRef}/>
    <div className=" col-md-12 row mt-3" style={{border :'solid 2px',padding: '5px',width: "98%"}}>
          <label className="col-sm-2 col-form-label">
            Inventaire en date du
          </label>
          <div className="col-md-4">
            <input type="date" name="search_date" className="form-control"/>
          </div>
          <div className="col-md-6" style={{
              display: "flex",
              justifyContent: "end"
            }}>
            <button className="btn btn-danger">
              <RiDeleteBin6Line/>
              Supprimer l'article
            </button>
            <button className="btn btn-info" onClick={() => {
                formRef.current.updateProduct(listRef.current.selectedRow)
                noteRef.current.setProduct(listRef.current.selectedRow)
            }}>
              <GrDocumentUpdate/>
              Modifier l'article
            </button>
            <button className="btn btn-success" onClick={() => {formRef.current.resetForm()}}>
              <BsDatabaseAdd/>
              Ajouter l'article
            </button>
          </div>
        </div>

    <div className="row mt-3" style={{paddingLeft: '0px'}}>
      <div className="col-md-8" style={{paddingLeft: '0px'}}>
        <InventoryForm ref={formRef} onSave={() => {listRef.current.getData()}} />
      </div>
      <div className="col-md-4">
            <InventoryNote ref={noteRef}/>
      </div>
    </div>
  </div>);
};

export default Inventory;