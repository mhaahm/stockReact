import React, {forwardRef, useImperativeHandle, useRef,useState,useEffect} from "react";
import {FcPlus} from "react-icons/fc";
import {FaRegSave} from "react-icons/fa";
import {MdOutlineFreeCancellation} from "react-icons/md";
import "./inventoryForm.css";
import {useRequest, getDataFromServer} from "../../Helper/Utils.js";
import Popup from "../Utils/Popup";

const InventoryForm = forwardRef((props, ref) => {
  const url = import.meta.env.VITE_SERVER_URL
  const [saveState,setSaveState] = useState(false)
  const [save,setSave] = useState(false)
  const [saveRes,setSaveRes] = useState('')
  const [addCateg,setAddCateg] = useState(false)
  const [addEmplacement,setAddEmplacement] = useState(false)

  const [product, setProduct] = useState({
    category: '',
    emplacement: '',
    reference: '',
    designation: '',
    unity: '',
    stockMinimal: 0,
    stockInitial: 0,
    dateAjout: new Date()
  });
  const [categToSave,setCategToSave] = useState({
    categName: ''
  })
  const [emplacementToSave,setEmplacementToSave] = useState({
    placeName: ''
  })

  const [setCategories,categories] = useRequest('categories','categ')
  const [setEmplacements,emplacements] = useRequest('emplacements','empla')
  const units = useRequest('unities')
  const formRef = useRef();
  useImperativeHandle(ref, () => ({
    resetForm() {
      formRef.current.reset();
    },
    async updateProduct(product) {
       console.log(product)
      const d = new Date(product.created_at);
      const date = d.getFullYear()  + "-" + (('0'+(d.getMonth()+1)).slice(-2)) + "-" + d.getDate() + "T" +
          d.getHours() + ":" + d.getMinutes()
      setProduct({
        category: product.category.id,
        emplacement: product.emplacement.id,
        reference: product.productReference,
        designation: product.productDesignation,
        unity: product.unity.id,
        stockMinimal: product.stock_minimal,
        stockInitial: product.stock_initial,
        dateAjout: date
      })
    }
  }));
  
  function handelChange(event) {
    const name = event.currentTarget.name;
    switch(event.currentTarget.type) {
        case 'select-one':
        case 'text':
        case 'number':
        case 'date':  
        case 'datetime-local':
            const val = event.currentTarget.value
            if(name == 'categ_name_to_add') {
              setCategToSave(last => {
               return  {
                  ...last,...{[name]: val }
                }
              })
            }else if(name == 'emplacement_name') {
              setEmplacementToSave(last => {
               return  {
                  ...last,...{[name]: val }
                }
              })
            } else {
              setProduct(last => { return {  ...last, ...{[name]: val }}})
            }


            break
        default:
            console.log(event.currentTarget.type+' not supported')
    }

  }

  async function saveProduct(ev) {
    ev.preventDefault();
    setSave(false);
    const rep = await fetch(url+'product/save', { method: 'POST',body: JSON.stringify(product) });
    if(rep.ok) {
      const reponse = await rep.json();
      setSaveState(reponse.res == 'success')
      setSaveRes(reponse.msg)
    } else {
      setSaveState(false)
      setSaveRes('Error contacting API')
    }
    setSave(true);
    props.onSave()
    setTimeout( () => setSave(false),4000)
  }
  function openAddCategPopup() {
    setAddCateg(!addCateg)
  }

  function openAddEmplacementPopup() {
    setAddEmplacement(!addEmplacement)
  }

  async function saveCateg() {
    const rep = await fetch(url+'category/save', { method: 'POST',body: JSON.stringify(categToSave) });
    if(rep.ok) {
      const reponse = await rep.json();
      setCategories(await getDataFromServer('categories'))
      setAddCateg(false)
      setProduct(last => {
        return {
          ...last,...{category: reponse.id}
        }
      })
    }
  }
  async function saveEmplacement() {
    const rep = await fetch(url+'emplacement/save', { method: 'POST',body: JSON.stringify(emplacementToSave) });
    if(rep.ok) {
      const reponse = await rep.json();
      setEmplacements(await getDataFromServer('emplacements'))
      setAddEmplacement(false)
      setProduct(last => {
        return {
          ...last,...{emplacement: reponse.id}
        }
      })
    }
  }

  return (<div style={{
      border: "solid 2px #000",
      padding: "8px"
    }}>
    <div className="row">
      <h2>Ajouter un Article</h2>
    </div>
    <div className={ "row col-md-12 mr-2 alert alert-"+(saveState ? 'success' : 'danger')} style={{display: save ? 'inline-block': 'none'}}> {saveRes} </div>
    <form ref={formRef} onSubmit={saveProduct}>
      <div className="row">
        <div className="form-group row pt-5">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Catégorie
          </label>
          <div className="col-sm-5 option-add">
            <select className="form-control" onChange={handelChange} value={product.category} name="category">
              <option value="0" key={0}></option>
              {
                categories.map(elem => {
                    return <option  value={elem.id} key={elem.id} >{elem.name} </option>
                })
              } 
            </select>
            <FcPlus onClick={openAddCategPopup}/>
          </div>
          <div className="col-sm-5">
            <span className="desc-form">(Catégorie de l'article)</span>
          </div>
        </div>
        <div className="form-group row pt-2">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Emplacement
          </label>
          <div className="col-sm-5 option-add">
            <select className="form-control" value={product.emplacement} name="emplacement" onChange={handelChange} >
              <option value=""> </option>
              {emplacements.map((elem) => {
                return <option value={elem.id} key={elem.id}>{elem.placeName}</option>
              })}
            </select>
            <FcPlus onClick={openAddEmplacementPopup}/>
          </div>
          <div className="col-sm-5">
            <span className="desc-form">(Lieu de stockage de l'article)</span>
          </div>
        </div>
        <div className="form-group row pt-2">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Référence
          </label>
          <div className="col-sm-5">
            <input type="text" className="form-control" name="reference" placeholder="Référence de l'article" onChange={handelChange} value={product.reference}/>
          </div>
        </div>
        <div className="form-group row pt-2">
          <label htmlFor="designation" className="col-sm-2 col-form-label">
            Désignation
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control"  placeholder="Désignation" value={product.designation} name="designation" onChange={handelChange}/>
          </div>
        </div>
        <div className="form-group row pt-2">
          <label htmlFor="unity" className="col-sm-2 col-form-label">
            Unité
          </label>
          <div className="col-sm-2 option-add" >
            <select className="form-control" value={product.unity} name="unity" onChange={handelChange}>
              <option value=""></option>
              {units.map(elem => {
                return <option value={elem.id} key={elem.id}>{elem.name}</option>
              })}
              
            </select>
            <FcPlus/>
          </div>
          <div className="col-sm-5">
            <span className="desc-form">(PC,kg,l,lots, x 5kg....)</span>
          </div>
        </div>
        <div className="form-group row pt-2">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Stock minimal
          </label>
          <div className="col-sm-2">
            <input type="number" className="form-control" name="stockMinimal" onChange={handelChange} value={product.stockMinimal}/>
          </div>
          <div className="col-sm-8">
            <span className="desc-form">
              (Si le stock est inférieur à ce chiffre, l'article sera marqué "bientôt épuisé" )
            </span>
          </div>
        </div>
        <div className="form-group row pt-2">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Date d'ajout
          </label>
          <div className="col-sm-2">
            <input type="datetime-local" className="form-control" name="dateAjout" onChange={handelChange} value={product.dateAjout}/>
          </div>
          <div className="col-sm-8">
            <span className="desc-form">
              (Date d'ajout de cet article dans la base de données )
            </span>
          </div>
        </div>
        <div className="form-group row pt-2">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Stock Initial
          </label>
          <div className="col-sm-2">
            <input type="number" className="form-control" value={product.stockInitial} onChange={handelChange} name="stockInitial"/>
          </div>
          <div className="col-sm-8">
            <span className="desc-form">
              (Stock disponible à la date d'ajout de cet article )
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{
              display: "flex",
              justifyContent: "end"
            }}>
            <button className="btn btn-success" type="submit">
              <FaRegSave/>
              Anregistrer
            </button>
            <button className="btn btn-danger">
              <MdOutlineFreeCancellation/>
              Annuler
            </button>
          </div>
        </div>
      </div>
    </form>
    {
        addCateg && <Popup content={
          <>
            <label className="form-label">Name</label>
            <input className="form-control" name="categ_name_to_add" onChange={handelChange}/>
            <div style={{justifyContent: "end", display: 'flex', paddingTop: "5px", marginRight: '-11px'}}>
              <button className="btn btn-success" onClick={saveCateg}>Save Category</button>
            </div>
          </>
        } onClose={openAddCategPopup} title="Add new Category"/>
    }
    {
      addEmplacement && <Popup content={
          <>
            <label className="form-label">Name</label>
            <input className="form-control" name="emplacement_name" onChange={handelChange}/>
            <div style={ {justifyContent: "end", display: 'flex',paddingTop: "5px",marginRight: '-11px'} }>
              <button className="btn btn-success" onClick={saveEmplacement}>Save Emplacement</button>
            </div>
          </>
        } onClose={ openAddEmplacementPopup} title="Add new Emplacement"/>
    }
  </div>);
});

export default InventoryForm;
