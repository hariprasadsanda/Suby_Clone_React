import React ,{useState ,useEffect} from 'react'
import {API_URL} from'./api'
import { use } from 'react'
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";


const ChainDisplay = () => {
    const[vendorData,setVendorData]=useState([])
    const[scrollPostion,setscrollPostion]=useState(0)

    const vendorFirmHandler = async ()=>{
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`)
            const newData = await response.json()
            setVendorData(newData)
        } catch (error) {
            alert("Failed To Fetch")
            console.error("failed to fetch")
            
        }
    }

    useEffect(()=>{
        vendorFirmHandler()
    },[])

    const scrollHandler= (direction)=>{
        const gallery = document.getElementById('chainSection')
        const scrollAmount =150;

        if(direction === "left"){
            gallery.scrollTo({
                left:gallery.scrollLeft - scrollAmount,
                behavior:"smooth"
            })
        }else if(direction === "right"){
            gallery.scrollTo({
                left: gallery.scrollLeft + scrollAmount,
                behavior:"smooth"
            })
        }

    }

    
  return (
   <>
   <div className="chainDisplayBox">
   <h2 className='chainDisplayHeading'>Top restaurant chains in Hyderabad</h2>
   <div className="chainbtnSection">
        <button onClick={()=>scrollHandler("left")} className='chainSectionBtn'><HiOutlineArrowCircleLeft /></button>
        <button onClick={()=>scrollHandler("right")}   className='chainSectionBtn'><HiOutlineArrowCircleRight /></button>
   </div>   
   </div>
  
   <section className='chainDisplaysection' id='chainSection' onScroll={(e)=>setscrollPostion(e.target.scrollLeft)}>
      {vendorData.vendors && vendorData.vendors.map((vendor)=>{
        return(
            <div className="vendorBox">
            {vendor.firm.map((item)=>{
                return(
                  <>
                    <div>
                        <img src={`${API_URL}/uploads/${item.image}`} className='chainSectionImage' />
                    </div>
                    <div className="chainSectonOffer">
                        <h2>Offer:{item.offer}</h2>
                    </div>
                    <div className='chainSectionFirmDetails'>
                        <h4>{item.firmName}</h4>
                        <h5>{item.area}</h5>
                    </div>
                  </>
                )
            })}
          </div>

        )
      })}
   </section>
   </>
  )
}

export default ChainDisplay
