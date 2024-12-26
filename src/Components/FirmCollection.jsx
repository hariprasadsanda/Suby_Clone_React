import React, { useState, useEffect } from 'react';
import { API_URL } from './api';
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner'

const FirmCollection = () => {
    const [firmData, setFirmData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const FirmHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const newData = await response.json();
            setFirmData(newData.vendors);
            setLoading(false);
        } catch (error) {
            setError("Failed to fetch vendors");
            console.error("Failed to fetch:", error);
            setLoading(true)
        }
    };

    useEffect(() => {
        FirmHandler();
    }, []);

    const filterHandler = (region) => {
        setSelectedRegion(region);
    };



    return (
        <>
        <>
        <div className='loaderSec'>
         {loading && <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""/>}
        </div>
        </>
        
            <h2>Restaurants with online food delivery in Hyderabad</h2>
            <div className="filterBtns">
                <button onClick={() => filterHandler("All")} className='filterBtn'>All</button>
                <button onClick={() => filterHandler("South-Indian")} className='filterBtn'>South-Indian</button>
                <button onClick={() => filterHandler("Chinese")} className='filterBtn'>Chinese</button>
                <button onClick={() => filterHandler("Bakery")} className='filterBtn'>Bakery</button>
            </div>
            <section className='firmDisplaysection'>
                {firmData.map((vendor) => (
                    vendor.firm.map((item) => {
                        if (selectedRegion === "All" || item.region.includes(selectedRegion.toLowerCase())) {
                            return (
                                <Link to={`/products/${item._id}/${item.firmName}`} className='linkTag' key={item._id}>
                                    <div>
                                        <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} className='firmSectionImage' />
                                    </div>
                                    <div className="firmSectonOffer">
                                        <h2 className='firmSectionOffer'>Offer: {item.offer}</h2>
                                    </div>
                                    <div className='firmSectionFirmDetails'>
                                        <h4>{item.firmName}</h4>
                                        <h5 className='firmRegion'>{item.region.join(', ')}</h5>
                                        <h5 className='firmRegion'>{item.area}</h5>
                                    </div>
                                </Link>
                            );
                        }
                        return null;
                    })
                ))}
            </section>
        </>
    );
};

export default FirmCollection;