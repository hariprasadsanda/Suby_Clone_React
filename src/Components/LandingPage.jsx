import React from 'react'
import Navbar from './Navbar'
import ItemsDisplay from './itemsDisplay/ItemsDisplay'
import ChainDisplay from './ChainDisplay'
import FirmCollection from './FirmCollection'
const LandingPage = () => {
  return (
    <div>
        <Navbar/>
       <div className='LandingPage'>
       <ItemsDisplay/>
        <ChainDisplay/>
        <FirmCollection/>
       </div>
    </div>
  )
}

export default LandingPage
