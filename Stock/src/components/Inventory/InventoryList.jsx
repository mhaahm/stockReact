import React, {useEffect, useState, useCallback, forwardRef, useImperativeHandle} from 'react'
import "./InventoryList.css"

const url = import.meta.env.VITE_SERVER_URL
const InventoryList = forwardRef((props, ref) => {
    const [inventory, setInventory] = useState([])
    const [selectedRow, setSelectedRow] = useState(-1)

    useImperativeHandle(ref, () => ({
        getData,
        selectedRow
    }));
    const getData = useCallback(function () {
        (async function () {
            const rep = await fetch(url + 'products', {method: 'GET'});
            const reponse = await rep.json();
            if (rep.ok) {
                setInventory(reponse['hydra:member'])
            } else {
                setInventory([])
            }
        })()
    })
    useEffect(function () {
        getData()
    }, [])

    return (
        <div className='row mt-3'>
            <div className='row mt-3' style={{backgroundColor: 'white',padding: '5px'}}>
                <table className='table table-striped table-bordered' >
                    <thead>
                    <tr key={0}>
                        <th>Catégorie</th>
                        <th>Emplacement</th>
                        <th>Reférence</th>
                        <th>Désignation</th>
                        <th>Etat du stock</th>
                        <th>Stock</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        inventory.map(elem =>
                            <tr key={elem.productReference}  onClick={() => {
                                setSelectedRow(elem)
                            }

                            } className={"clickable-row ".concat(selectedRow.id === elem.id ? "selected" : "")}>
                                <td>{elem.category.name}</td>
                                <td>{elem.emplacement.placeName}</td>
                                <td>{elem.productReference}</td>
                                <td>{elem.productDesignation}</td>
                                <td>{elem.stock_initial < elem.stock_minimal ? 'Article Epuisé' : 'Article en stock'}</td>
                                <td>{elem.stock_initial + '' + elem.unity.label}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
});

export default InventoryList