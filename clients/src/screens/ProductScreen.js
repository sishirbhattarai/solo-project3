import React from 'react'
import "./ProductScreen.css";

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img src="https://ae01.alicdn.com/kf/HTB19JUcbjzuK1RjSspeq6ziHVXaU/Original-New-Arrival-NIKE-AS-M-NSW-POLO-MATCHUP-PQ-NVLTY-Men-s-T-shirts-short.jpg" alt="product name"/>
                </div>

                <div className="left__info">
                <p className="left__name">Product 1</p>
                <p>Price: $99.99</p>
                <p>Description: A great fit for performance and everyday wear, shop men's shirts & t-shirts.</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price: <span>$99.99</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Quantity:
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add to Cart</button> 
                    </p>
                </div>
            </div>
        </div>

    )
}

export default ProductScreen;
