import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import "./HomeScreen.css";
import Product from "../components/Product.js";


import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    //everytime the page loads, the page will list the products
    useEffect(() => {
        dispatch(listProducts())}, [dispatch]);


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
