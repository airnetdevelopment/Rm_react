import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const TravellingDetails = () => {

    const travellingDetails = useSelector(state=>state.citySelection);

    const getTravelersCount = (travelers) => {
        const { adults, children } = travelers.reduce((acc, t) => {
            acc.adults += t.adultCount;
            acc.children += t.childCount;
            return acc;
        }, { adults: 0, children: 0 });
    
        if (adults > 1 && children > 1) {
            return `${adults} adults, ${children} children`;
        } else if (adults === 1 && children > 1) {
            return `${adults} adult, ${children} children`;
        } else if (adults > 1 && children === 1) {
            return `${adults} adults, ${children} child`;
        } else if (adults === 1 && children === 1) {
            return `${adults} adult, ${children} child`;
        } else if (adults > 1 && children === 0) {
            return `${adults} adults`;
        } else if (adults === 1 && children === 0) {
            return `${adults} adult`;
        } else if (adults === 0 && children > 1) {
            return `${children} children`;
        } else if (adults === 0 && children === 1) {
            return `${children} child`;
        } else {
            return "No travelers";
        }
    };
    
    useEffect(() => {
        console.log(travellingDetails);
    }, [travellingDetails]);
    

    return (
        <div className='flex flex-wrap gap-4 p-1'>
            <div className='flex items-center gap-2 h-12 flex-grow bg-white font-bold'>
                <h2 className='text-sm font-bold text-indigo-900'>Date Range:</h2>
                <p className='text-sm font-bold text-red-500 underline'> <span> {travellingDetails.startDate} </span>  -  <span>{travellingDetails.endDate || "Not Selected" } </span></p>
            </div>

            <div className='flex items-center gap-2 h-12 flex-grow bg-white font-bold'>
                <h2 className='text-sm font-bold text-indigo-900'>Departure City:</h2>
                <p className='text-sm font-bold text-red-500 underline'>{travellingDetails.departureCity || "Not Selected" }</p>
            </div>

            <div className='flex items-center gap-2 h-12 flex-grow bg-white font-bold'>
                <h2 className='text-sm font-bold text-indigo-900'>Travellers:</h2>
                <p className='text-sm font-bold text-red-500 underline'>{getTravelersCount(travellingDetails.travelers)}</p>
            </div>

            <div className='flex items-center gap-2 h-12 flex-grow bg-white font-bold'>
                <h2 className='text-sm font-bold text-indigo-900'>Purpose Of Travel:</h2>
                <p className='text-sm font-bold text-red-500 underline'>{travellingDetails.purposeOfTravel || "Not Selected" }</p>
            </div>

            <div className='flex items-center gap-2 h-12 flex-grow bg-white font-bold'>
                <h2 className='text-sm font-bold text-indigo-900'>Traveller Type:</h2>
                <p className='text-sm font-bold text-red-500 underline'>{travellingDetails.travelerType || "Not Selected" } </p>
            </div>
        </div>
    );
};

export default TravellingDetails;