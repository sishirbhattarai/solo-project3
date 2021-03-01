import React from 'react';
import "./HomeScreen.css";
import Product from "../components/Product.js"

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Recent Products</h2>

            <div className="homescreen__products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

            </div>
        </div>
    )
}

export default HomeScreen;
