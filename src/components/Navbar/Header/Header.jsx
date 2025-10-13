// import React from 'react'
// import './Header.css'
// const Header = () => {
//   return (
//     <div className='header'>
//       <div className="header-content">
//         <h2>Order your favourite food here </h2>
//         <p>Choose from a diverse menu featuring a deletable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time. </p>
//         <button>View Menu</button>
//       </div>
//     </div>
//   )
// }

// export default Header


import React from 'react'
import './Header.css'
import header_img from '../../../assets/header_img.png';


const Header = () => {
  return (
    <div className='header'>
      {/* Background image or regular image */}
      <img src={header_img} alt="Header" className="header-img" />

      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. 
          Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
