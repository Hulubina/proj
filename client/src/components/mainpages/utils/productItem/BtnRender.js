import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    
    return (
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <Link  className="btndes" id="btn_buy" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        Sterge
                    </Link>
                    <Link  className="btndes"id="btn_view" to={`/edit_product/${product._id}`}>
                        Editeaza
                    </Link>
                </>
                : <>
                    <Link  className="btndes"id="btn_buy" to="#!" onClick={() => addCart(product)}>
                        Cumpara
                    </Link>
                    <Link className="btndes" id="btn_view" to={`/detail/${product._id}`}>
                        Vizualizare
                    </Link>
                </>
            }
                
        </div>
    )
}

export default BtnRender
