import React from 'react';
import Banner from '../../assets/images/Banner.png';


export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__sub-text">FURNITURE STORE</div>
            <div className="hero__heading">
            Discover the Artistry of Modern Contemporary Furniture
            </div>
            <div className="hero__description">
            Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation
            </div>
            <div className="hero__banner">
                <img src={Banner} alt='hero'/>
            </div>
        </div>    
    )
}

