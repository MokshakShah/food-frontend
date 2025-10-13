
import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = import.meta.env.VITE_API_URL;
    const [token,setToken] = useState("");
    const [food_list,setFoodlist]=useState([]);



    const addToCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
            //itemId here is request body data ko json format me bhejta hai
            //headers ka use ye hai ki agar user login hai to uska token bhejna hai
        }
    };

    const getTotalCartAmt= ()=>{
        let TotalAmt=0;

        for(const item in cartItems)
        {if(cartItems[item]>0){
            let itemInfo=food_list.find((product)=>product._id === item); 
            TotalAmt+= itemInfo.price * cartItems[item];
          }
        }
        return TotalAmt;
    }

    // yha se food details pass on hogi
    const fetchFoodlist = async ()=>{
    //     const response = await axios.get(url+"/api/food/list");
    const response = await axios.get(`${url}/api/food/list`);

        setFoodlist(response.data.data);
    }

    // agar page refresh marenge toh cart wala +  hoga woh bhi dikhega 
    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        // setCartItems(response.data.cartData);
        setCartItems(response.data.cartData.cartData); // ✅ Correct

    }


    //This stores the data even after refresh
    useEffect (()=>{
       
        async function loadData(){
            await fetchFoodlist();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
                //yha se jitna storage hai cart ka woh idhar akar store hoga token wise
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmt,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

