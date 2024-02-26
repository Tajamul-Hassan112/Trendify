import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Popular from '../../Components/Popular/Popular'
import Offer from '../../Components/Offer/Offer'
import NewColllections from '../../Components/NewColllections/NewColllections'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewColllections/>
        <NewsLetter/>
    </div>
  )
}

export default Shop