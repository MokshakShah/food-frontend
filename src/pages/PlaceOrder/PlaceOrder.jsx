import React, {  useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const {getTotalCartAmt,token,food_list,cartItems,url}=useContext(StoreContext);

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  });

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value= event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event)=>{
    event.preventDefault();
    //structuring order data
    let orderItems=[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo=item;
        itemInfo["quantity"]=cartItems[item._id];
        //yha se ek product ka quantity pata chalega
        orderItems.push(itemInfo);
        //pushing item into order placement
      }
    })

    let orderData = {
      address:data,  //taken from data (usestate)
      items:orderItems, //items ka count and details rakhegene isme
      amount:getTotalCartAmt()+2 //total bill+del charges
    }

    let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success){
      const {session_url}= response.data;
      window.location.replace(session_url);
      //redirecting to payment gateway
  }else{
    alert("Error placing order, please try again later");
  }
}

  const navigate= useNavigate();

  useEffect(()=>{
    if(!token){
      navigate('/cart');
    }else if(getTotalCartAmt()===0){
     navigate('/cart'); 
    }
  },[token])
  return (
    <form onSubmit={placeOrder} className='place-order'>

  <div className="place-order-left">
    <p className="title">Delivery</p>

    <div className="multi-fields">
      <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name"/>
      <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder=" Last Name"/>
    </div>

    <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Email Address"/>
    <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder=" Street"/>
 
    <div className="multi-fields">
      <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder="City"/>
      <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder=" State"/>
    </div>

    <div className="multi-fields">
      <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} pattern="\d{6}" type="text" placeholder="Zip Code"/>
      <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder=" Country"/>
    </div>

    <input required name='phone' onChange={onChangeHandler} pattern="\d{10}" value={data.phone} type="text" placeholder="Phone no"/>
    </div>      


    <div className="place-order-right">
      
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
              <button type='submit'>PROCEED TO PAYMENT</button>

            </div>

    </div>
    </form>
  )
}

export default PlaceOrder


// Sorry but the stripe was not working so i have not added any stripe code just entered a random dummy value hence it will show alert of error
