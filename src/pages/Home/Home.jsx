import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/Navbar/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'


const Home = () => {
const[category,setCategory]=useState("All");

  return (
    <div>
      {/* Home page ma header use karsu phela */}

    <Header/>
    {/* isme ayega explore menu_list */}

    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
