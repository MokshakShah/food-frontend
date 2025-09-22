// import React, { useContext } from 'react'
// import  './FoodDisplay.css'
// import { StoreContext } from '../../context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem';
// // Iska use ye hai ki ye sab food products ko display karega , aur sab chize fooditem.jsx se le ga

// //category assets.jsx me hai

// const FoodDisplay = ({category}) => {
//     const {food_list}=useContext(StoreContext);

//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Top dishes near you</h2>
//       <div className="food-display-list">
//         {/* grid layer banao iska */}

//         {food_list.map((item,index)=>{

//             if(category==="All" || category===item.category)

//             return <FoodItem key={index} id={item.id} name={item.name} description={item.description}  price={item.price} image={item.image} />


//         })}
//       </div>
//     </div>
//   )
// }

// export default FoodDisplay


import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem
                                key={item._id} 
                                _id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;











