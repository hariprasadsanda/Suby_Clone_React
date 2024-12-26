import React from 'react'
import { itemData } from './itemData'
import { useState } from 'react'

const ItemsDisplay = () => {

    const[displayItems,setdisplayItems]=useState(itemData)
    console.log(displayItems)
  return (
   <>
   <h2>What's on your mind?</h2>
    <div className='itemDisplaySection' key="">
      {displayItems.map((e)=>{
        return(
            <div className="itemDisplayImageSection">
                <img src={e.item_img} alt='Loading' className='itemDisplayImage'/>
            </div>
        )
      })}
    </div>
   </>
  )
}

export default ItemsDisplay
