import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
//  Getting the data of Shop
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data));

    },[]);

    // To be added goods to cart
   const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
           
        const newCart = [...cart,product];
        setCart(newCart);

    };
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                  products.map(product =><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='card-container'>
                <h2>From card</h2>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;