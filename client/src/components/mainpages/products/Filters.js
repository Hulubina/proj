import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                <span>Filtre: </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>Toate Produsele</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="Introdu produsul dorit"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>Sortează după: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Cel mai nou</option>
                    <option value='sort=oldest'>Cel mai vechi</option>
                    <option value='sort=-sold'>Cele mai cumpărate</option>
                    <option value='sort=-price'>Preț Descrescător</option>
                    <option value='sort=price'>Preț Crescător</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
