import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../cart/Cart';
//  Getting the data of Shop
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data));

    },[]);

    // To be added goods to cart
   const [carts, setCarts] = useState([]);

    const handleAddToCart = (product) => {
           
        const newCart = [...carts,product];
        setCarts(newCart);

    };
    console.log(carts);
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                  products.map(product =><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='card-container'>
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;