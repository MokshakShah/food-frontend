import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  if (!food_list || food_list.length === 0) {
    return (
      <div className="food-display">
        <h2>Top dishes near you</h2>
        <p style={{ padding: "20px", textAlign: "center" }}>Loading menu...</p>
      </div>
    );
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list
          .filter(
            (item) => category === "All" || category === item.category
          )
          .map((item) => (
            <FoodItem key={item._id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;



// import React, { useContext } from 'react';
// import './FoodDisplay.css';
// import { StoreContext } from '../../context/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';

// const FoodDisplay = ({ category }) => {
//     const { food_list } = useContext(StoreContext);

//     return (
//         <div className='food-display' id='food-display'>
//             <h2>Top dishes near you</h2>
//             <div className="food-display-list">
//                 {food_list.map((item) => {
//                     if (category === "All" || category === item.category) {
//                         return (
//                             <FoodItem
//                                 key={item._id} 
//                                 _id={item._id}
//                                 name={item.name}
//                                 description={item.description}
//                                 price={item.price}
//                                 image={item.image}
//                             />
//                         );
//                     }
//                     return null;
//                 })}
//             </div>
//         </div>
//     );
// };

// export default FoodDisplay;











