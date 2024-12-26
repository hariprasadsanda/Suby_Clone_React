import React from 'react'
import { API_URL } from './api'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Navbar from './Navbar';



const ProductDisplay = () => {

    const[products,setProducts] = useState([])

    const {firmId ,firmName} = useParams()



    const productDisplayHandler = async()=>{
      try {
        const response = await fetch(`${API_URL}/product/${firmId}/products`)
        const newProductsData = await response.json()
        setProducts(newProductsData.products)

      } catch (error) {
        console.log('unable to load the products')
        
      }
    } 
    useEffect(()=>{
      productDisplayHandler()
    },[])

  return (
    <>
    <Navbar/>
    <div>
      <h3>{firmName}</h3>
    </div>
    <section className='productDisplay'>
      {products.map((item)=>{
        return(
          <>
         <div className='productDiplaySection'>
            <div>
            <h4>{item.productName}</h4>
            <h5><MdOutlineCurrencyRupee />{item.price}</h5>
            <p>{item.category.join(',')}</p>
            </div>
              <div>
                  <img src={`${API_URL}/uploads/${item.image}`} className='productDisplayImg' />
                  <button className='productDisplayBtn'>Add</button>
              </div>
         </div>
          </>
          

        )
      })}

    </section>

    </>
  )
}

export default ProductDisplay
