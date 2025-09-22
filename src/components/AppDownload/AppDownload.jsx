import React from 'react'
import './AppDownload.css'
import {assets} from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p><br/>For Better Experince Download <br/> Tomato App</p>
        <div className="app-downlaod-platforms">
           <a href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN">
            <img src={assets.play_store} /> 
            </a>
            <a href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896">
            <img src={assets.app_store} />
            </a>
        </div>
    </div>
  )
}

export default AppDownload
