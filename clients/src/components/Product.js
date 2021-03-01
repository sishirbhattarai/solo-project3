import React from 'react';
import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="product">
            <img src= "https://images.squarespace-cdn.com/content/v1/5a8a950b49fc2b8e07168a4b/1603174911818-LXNSDWJUKZX87KGZJEL9/ke17ZwdGBToddI8pDm48kHLkaGepgEi8AZUCH-v7pxF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmzUsryC7riGV7bTeYhg5Seo4guSoNOddIiW0jLvghl_108-ij1mxYFmcrilRZ9VLb/ES12SC67-JIN%28Amazon%29_.jpg?format=1000w" alt="product name"/>

            <div className="product__info">
                <p className="info__name">Iphone 12 Pro Max</p>
                <p className="info__description">
                5G goes Pro. Buy now. Special deals are available. Super Retina XDR display. Dolby Vision recording. Ceramic Shield. LiDAR Scanner. A14 Bionic chip. Night mode. Low-light photography. Services: Finance with Apple Card, Online personal session.
                </p>

                <p className="info__price">$1299</p>

                <Link to={`/product/${1111}`} className="info__button">View</Link>

            </div>
            
        </div>
    )
}

export default Product;
