import React from 'react';
import { Button } from '../Buttons/Buttons';


function Cards() {
    return (
        <>
        <div className="product__card">
            <div className="product__card__image-container">
                <div className="product__card__image">
                    <img src="/assets/images/furniture-1.png" alt="furniture" />
                    <Button 
                    route="" 
                    text="Add to cart" 
                    icon="arrow-right" 
                    variant="btn-primary" 
                    notification={0} 
                />
                </div>
            </div>
            <div className="product__card__price-name">
            <div className="product__card__title">
                Boucle Accent Chair
            </div>
            <div className="product__card__price">
                44
            </div>
            </div>
            <div className="product__card__color">
                <div className="product__card__color-btn" style={{background:"red"}}>
                </div>
                <div className="product__card__color-btn" style={{background:"blue"}}>
                </div>
                <div className="product__card__color-btn" style={{background:"green"}}>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards