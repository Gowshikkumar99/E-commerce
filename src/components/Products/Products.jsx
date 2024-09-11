import React from 'react'
import Cards from '../Cards/Cards'

function Products() {
    return (
        <>
        <div className="products-heading-block">
        <div className="products__heading">
            Top Products
        </div>
        <div className="products__filter">
            <ul className='products__filter__menu'>
                <li className='products__filter__item'>
                    Most Recent
                </li>
                <li className='products__filter__item'>
                    Price Low - high
                </li>
            </ul>
        </div>
        <div className="product-main-block">
            <Cards />
        </div>
        </div>

        </>
    )
}

export default Products
