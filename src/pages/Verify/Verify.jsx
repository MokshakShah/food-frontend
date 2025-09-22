import React, { useEffect,useContext } from 'react'
import './Verify.css'
import axios from 'axios';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Verify = () => {

    //useSearchParams is used to check your URL  in that we will check on for success==true
    const [serachParams,setSearchParams]=useSearchParams();
    const  success=serachParams.get('success');
    const  orderId=serachParams.get('orderId');
    const {url}=useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async() => {
        const response = await axios.post(url+"/api/order/verify",{success,orderId});

        if(response.data.success){
            // Handle successful verification
            navigate("/myorders");
        }else{
            navigate("/");
        }
    }

    useEffect(()=>{
        verifyPayment();
    })


  return (
    <div className='verify'>
        <div className="spinner">

        </div>
      
    </div>
  )
}

export default Verify
