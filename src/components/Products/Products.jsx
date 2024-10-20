import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
// import data from '../../data/products.json';
import apiservicecall from "../../services/apiservicecall";
import { Button } from "../Buttons/Buttons";

function Products() {

    const [filter,setFilter] = useState('Most Recent');
    const [products,setProducts] = useState([]);

    const handleClick = (filterItem) => {
        setFilter(filterItem);
    }

    useEffect (()=>{
       const apiService = new apiservicecall();
        apiService.fetchProduct().then(res=>setProducts(res.products)).catch(err=>console.log('err'));
    },[]);
    

  return (
    <>
      <div className="products-heading-block">
        <div className="products__top-block">
          <div className="products__heading">Top Products</div>
          <div className="products__filter">
            <div className="products__filter-default">
               {filter}
            </div>
            <ul className="products__filter__menu">
              <li key={'1'} className="products__filter__item"  onClick={()=>handleClick('Top Rated')}>Top Rated</li>
              <li key={'2'} className="products__filter__item" onClick={()=>handleClick('Price Low - High')}>Price Low - high</li>
              <li key={'2'} className="products__filter__item" onClick={()=>handleClick('Price')}>Price Low - high</li>
            </ul>
          </div>
        </div>

        <div className="products__main-block">
            {products.map((product, index) => {
                return(
                    <Cards
                    key={index} 
                    title={product.title}
                    price={product.price}
                    colors={product.colors}
                    image={product.image}
                    />
                )
            })}
        </div>
        <div className="products__bottom-block">
            <Button text={'Show More'} variant={'btn-outline'} />
        </div>
      </div>
    </>
  );
}

export default Products;
