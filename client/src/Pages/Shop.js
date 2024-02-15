import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/populaire/Popular'

import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>  
      <Popular/>
      <Offers></Offers>
      <NewCollections/> 
      <NewsLetter/>
      
    </div>
  )
}

export default Shop