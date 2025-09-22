import React, { useContext } from 'react'
import './Cart.css'

import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmt,url}= useContext(StoreContext);
  const navigate = useNavigate();

  return (
    
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">

              <p>Items</p>
              <p>Title</p>
              <p>Price($)</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>

            </div>
            <br/>
            <hr/>
              
            {food_list.map((item,index)=>{
              if(cartItems[item._id]>0){
              const Total = (item.price)*(cartItems[item._id]);

                return(
                  <div>
                  <div key={index} className="cart-items-title cart-items-item">
                   <img src={url+"/images/"+item.image} />
                   <p>{item.name}</p>
                   <p>{item.price}</p>
                   <p>{cartItems[item._id]}</p>
                   <p>{Total}</p>
                   <p className='cross' onClick={()=>
                    removeFromCart(item._id)
                   }>X</p>

                  </div>
                  <hr/>
                  </div>
                )
              }
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Total</h2>


              <div>
                <div className="cart-total-details">
                  <p>Sub-Total</p>
                  <p>${getTotalCartAmt()}</p>
                </div>
                <hr/>

                <div className="cart-total-details">
                <p>Delievery Fee</p>
                <p>${getTotalCartAmt()===0?0:2}</p>
                </div>
                <hr/>

                <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmt()===0?0:getTotalCartAmt()+2}</b>
                </div>
              </div>
              <button onClick={()=>navigate('../order')}>PROCEED TO CHECKOUT</button>

            </div>

            <div className="cart-promocode">
              <div>
                <p>If you have a promocode Enter here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder='Enter promo here...'/>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
  )
}

export default Cart
