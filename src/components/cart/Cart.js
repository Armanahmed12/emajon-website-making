import React from "react";
import './Cart.css';

const Cart = ({carts}) => {
    
    let totalPrice = 0;
    let shippingCost = 0;
    let quantity = 0;
   console.log(carts);
   
    for(const cart of carts){
           console.log(cart);
          shippingCost = shippingCost + cart.shipping;
         
          quantity = quantity + cart.quantity;
          const findingTotal = cart.quantity * cart.price;
          totalPrice = totalPrice + findingTotal;
          
     };
    
     const tax = totalPrice * 7 / 100;
     const grandTotal = totalPrice + shippingCost + tax; 
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: {totalPrice} </p>
      <p>Shipping Charge: {shippingCost}</p>
      <p>Tax: {parseInt(tax)}</p>
      <h4>Grand total: {parseInt(grandTotal)}</h4>
    </div>
  );
};

export default Cart;
