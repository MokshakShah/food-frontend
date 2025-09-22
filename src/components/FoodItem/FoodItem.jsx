import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';



// Iska use ye hai ki : jab fooddisplay sab chizee mange gaa toh sab yha se jayegi uske pass
// iski sab chize like price , id sab assets.jsx me hai

{/* // Isme jab cartItem 0 hoga toh phele img me ayega aur jaise hi tum icon pe click karoge toh voh 1 ho jayega uska matlab ab cartItem =1 hogaya jisse item count 2nd stmt pe jayega */}

const FoodItem = ({_id,name,price,description,image}) => {


  const {cartItems,addToCart,removeFromCart,url}= useContext(StoreContext);

    return (
  
      <div className="food-item">

        <div className="food-item-img-container">
            <img className='food-item-image' src={`${url}/images/${image}`} />
            

               { !cartItems[_id]
                ?<img className='add' onClick={()=>addToCart(_id)} src={assets.add_icon_white}/>

                :<div className='food-item-counter'>
                    
                    <img onClick={()=>removeFromCart(_id)} src={assets.remove_icon_red}/>

                    <p>{cartItems[_id]}</p>

                    <img onClick={()=>addToCart(_id)}src={assets.add_icon_green}/>

                </div>
            }
        </div>
      
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts}/>
        </div>

        <p className="food-item-desc">
            {description}
        </p>
        <p className="food-item-price">
            ${price}
        </p>
      </div>
  

  )
}


export default FoodItem


