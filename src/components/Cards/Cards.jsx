import React from "react";
import { Button } from "../Buttons/Buttons";

function Cards({ title, price, colors, image }) {
  return (
    <>
      <div className="product__card">
        <div className="product__card__image-container">
          <div className="product__card__image">
            <img src={image} alt="furniture" />
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
          <div className="product__card__title">{title}</div>
          <div className="product__card__price">{`$` + price}</div>
        </div>
        <div className="product__card__color">
          {colors.map((color) => {
            return (
              <>
                <div
                  className="product__card__color-btn"
                  style={{ background: color }}
                ></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
