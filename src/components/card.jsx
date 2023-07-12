import React from "react";
import './card.css'
function Card({imgSrc,title,price,rating}) {
    return (
        <div className="card">
            <img src={imgSrc} alt="error" />
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{rating}</p>
        </div>
    );
}

export default Card;