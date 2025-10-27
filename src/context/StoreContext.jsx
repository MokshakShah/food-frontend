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
        }
    };

    const getTotalCartAmt= ()=> {
        let TotalAmt=0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product)=>product._id === item);
                if(itemInfo){
                    TotalAmt += itemInfo.price * cartItems[item];
                }
            }
        }
        return TotalAmt;
    }

    const fetchFoodlist = async ()=>{
        const response = await axios.get(`${url}/api/food/list`);
        setFoodlist(response.data.data);
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get", {}, {headers:{token}});
        setCartItems(response.data.cartData); // ✅ Correct Fix
    }

    useEffect(() => {
        async function loadData(){
            await fetchFoodlist();
            const storedToken = localStorage.getItem("token");
            if(storedToken){
                setToken(storedToken);
                await loadCartData(storedToken);
            }
        }
        loadData();
    },[]);

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
