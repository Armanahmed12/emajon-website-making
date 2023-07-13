import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

//  Getting the data of Shop by fetching
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        
     fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data));

    },[]);

//  Getting an object of Id from localStorage through which we can be able to find out object which is related with this Id.
useEffect(()=>{

     const storedCartsId = getShoppingCart();
        const savedCart = [];
        for(const id in storedCartsId){

         let addedProduct = products.find(product => product.id === id);
       
          if(addedProduct){

            let quantity = storedCartsId[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);

          }
       
        };

     setCarts(savedCart);
      
         
},[products]);
    // Goods(product) are being added to the cart(LocalStorage) after being collected.
    const [carts, setCarts] = useState([]);
    let newCarts = [];
    const handleAddToCart = (product) => {
         
        let existing = products.find(pd =>  pd.id === product.id);
        if(!existing){

             product.quantity = 1;
             newCarts = [...carts,product];
            
        }
        else{
            existing.quantity = existing.quantity + 1;
            const remaining = carts.filter(pd => pd.id !== product.id);
            newCarts = [...remaining,existing];

        }
        
         setCarts(newCarts);
         addToDb(product.id);

    };

// Cart is being added to the LocalStorage
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