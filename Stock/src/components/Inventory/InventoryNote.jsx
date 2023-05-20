import React, {forwardRef, useImperativeHandle, useState} from 'react'
import {FaRegSave} from 'react-icons/fa'
import {MdOutlineFreeCancellation} from 'react-icons/md'

const InventoryNote = forwardRef((props, ref) => {
    const url = import.meta.env.VITE_SERVER_URL
    const [selectedProduct, setSelectedProduct] = useState({productNote: ''})
    const [save, setSave] = useState(false)
    const [saveRes, setSaveRes] = useState('')
    const [saveState, setSaveState] = useState(false)

    async function saveProducteNode() {
        const id = selectedProduct.id;
        setSave(false)
        const rep = await fetch(url + 'product/saveNote', {
            method: 'POST', body: JSON.stringify({
                id: id,
                noteP: selectedProduct.productNote
            })
        });
        if (rep.ok) {
            const reponse = await rep.json();
            setSave(true)
            setSaveState(reponse.res == 'success')
            setSaveRes(reponse.msg)
        } else {
            setSaveState(false)
            setSaveRes('Error contacting API')
        }
        setTimeout(() => setSave(false), 4000)

    }

    function handelChange(ev) {
        const val = ev.currentTarget.value
        setSelectedProduct((last) => {
            return {
                ...last, ...{productNote: val}
            }
        })
    }

    useImperativeHandle(ref, () => ({
        setProduct(p) {
            if (!p.productNote) {
                p.productNote = ''
            }
            setSelectedProduct(p)
        }
    }))
    return (
        <div style={{border: 'solid 2px #000', padding: '8px'}}>
            <div className='row' style={{display: 'contents'}}>
                <h2>Notes pour cet article</h2>
                <div className={"col-md-12 m-2 mr-5 alert alert-" + (saveState ? 'success' : 'danger')}
                     style={{display: save ? 'inline-block' : 'none'}}> {saveRes} </div>

            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <textarea className='form-control' rows={16} value={selectedProduct.productNote}
                              onChange={handelChange}/>
                </div>

            </div>
            <div className='row pt-4'>
                <div className='col-md-12' style={{display: 'flex', justifyContent: 'end'}}>
                    <button className='btn btn-success' onClick={saveProducteNode}><FaRegSave/> Anregistrer</button>
                    <button className='btn btn-danger'><MdOutlineFreeCancellation/> Annuler</button>
                </div>
            </div>
        </div>
    )
})

export default InventoryNote