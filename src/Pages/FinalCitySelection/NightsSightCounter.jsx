import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useEffect } from 'react';

const NightsDialog = ({ visible, onHide , cities }) => {
    const [nights, setNights] = useState({}); 
    const [inclusiveSights,setInclusiveSights] = useState({});
    const [exclusiveSights,setExclusiveSights] = useState({});
 
    
    // Initialize state for each city's nights and sights
    const initializeState = () => {
        const nightsObj = {};
        const inclusiveSightsObj = {};
        const exclusiveSightsObj = {};

        cities.forEach(city => {
            nightsObj[city.id] = 1; // Default to 1 night
            inclusiveSightsObj[city.id] = 1; // Default to 1 inclusive sight
            exclusiveSightsObj[city.id] = 1; // Default to 1 exclusive sight
        });

        setNights(nightsObj);
        setInclusiveSights(inclusiveSightsObj);
        setExclusiveSights(exclusiveSightsObj);
    };

     // Call initializeState when the modal opens
     React.useEffect(() => {
        if (visible) {
            initializeState();
        }
    }, [visible]);

    const incrementNights = (cityId) => {
        setNights(prev => ({ ...prev, [cityId]: prev[cityId] + 1 }));
    };

    const decrementNights = (cityId) => {
        setNights(prev => ({ ...prev, [cityId]: prev[cityId] > 1 ? prev[cityId] - 1 : prev[cityId] }));
    };

    
    const incrementInclusiveSights = (cityId) => {
        setInclusiveSights(prev => ({ ...prev, [cityId]: prev[cityId] + 1 }));
    };

    const decrementInclusiveSights = (cityId) => {
        setInclusiveSights(prev => ({ ...prev, [cityId]: prev[cityId] > 1 ? prev[cityId] - 1 : prev[cityId] }));
    };

    const incrementExclusiveSights = (cityId) => {
        setExclusiveSights(prev => ({ ...prev, [cityId]: prev[cityId] + 1 }));
    };
    const decrementExclusiveSights = (cityId) => {
        setExclusiveSights(prev => ({ ...prev, [cityId]: prev[cityId] > 1 ? prev[cityId] - 1 : prev[cityId] }));
    };


    const footer = (
        <div className='flex flex-row justify-center'>
            <Button className='bg-indigo-900 text-white p-2' label="Add" onClick={() => { /* Handle confirm action */ }} />
            {/* <Button label="Cancel" onClick={onHide} className="p-button-text bg-red-700 text-white p-2" /> */}
        </div>
    );

    return (
        // <Dialog header="Add Nights and SightSeeings" visible={visible} onHide={onHide} footer={footer}>
        //     <div className='flex flex-row space-x-4 w-[48rem]'>
        //     <div className="flex align-items-center">
        //         <label className="mx-2">Number Of Nights:</label>
        //         <Button icon="pi pi-minus" onClick={decrementNights} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
        //         <label className="mx-2 border-2 border-gray-200 h-6 w-6 pl-1 pr-1">{nights} </label>
        //         <Button icon="pi pi-plus" onClick={incrementNights} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
        //     </div>
        //     <div className="flex align-items-center pl-3">
        //         <label className="mx-2">Inclusive SightSeeings:</label>
        //         <Button icon="pi pi-minus" onClick={decrementInclusiveSights} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
        //         <label className="mx-2 border-2 border-gray-200 h-6 w-6 pl-1 pr-1">{inclusivesights}</label>
        //         <Button icon="pi pi-plus" onClick={incrementInclusiveSights} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
        //     </div>
        //     <div className="flex align-items-center pl-3">
        //         <label className="mx-2">Exclusive SightSeeings:</label>
        //         <Button icon="pi pi-minus" onClick={decrementExclusiveSights} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
        //         <label className="mx-2 border-2 border-gray-200 h-6 w-6 pl-1 pr-1">{exclusivesights}</label>
        //         <Button icon="pi pi-plus" onClick={incrementExclusiveSights} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
        //     </div>
        //     </div>
        // </Dialog>
        <Dialog header="Add Nights and SightSeeings" visible={visible} onHide={onHide} footer={footer}>
        <div className='flex flex-col'>
            
            {cities.map(city => (
                <div key={city.id} className='rounded'>
                    <h3 className='font-semibold p-1 underline text-md'>{city.city_name}</h3>
                    <div className="flex flex-row space-x-4">
                        <div className="flex align-items-center">
                            <label className="mx-2">Nights:</label>
                            <Button icon="pi pi-minus" onClick={() => decrementNights(city.id)} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
                            <label className="mx-2 border-2 border-gray-200 h-6 w-6 pl-1 pr-1">{nights[city.id]}</label>
                            <Button icon="pi pi-plus" onClick={() => incrementNights(city.id)} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
                        </div>
                        <div className="flex align-items-center pl-3">
                            <label className="mx-2">Inclusive SightSeeings:</label>
                            <Button icon="pi pi-minus" onClick={() => decrementInclusiveSights(city.id)} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
                            <label className="mx-2 border-2 border-gray-200 h-6 w-6 pl-1 pr-1">{inclusiveSights[city.id]}</label>
                            <Button icon="pi pi-plus" onClick={() => incrementInclusiveSights(city.id)} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
                        </div>
                        <div className="flex align-items-center pl-3">
                            <label className="mx-2">Exclusive SightSeeings:</label>
                            <Button icon="pi pi-minus" onClick={() => decrementExclusiveSights(city.id)} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
                            <label className="mx-2 border-2 border-gray-200 h-6 w-6 pl-1 pr-1">{exclusiveSights[city.id]}</label>
                            <Button icon="pi pi-plus" onClick={() => incrementExclusiveSights(city.id)} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Dialog>

//     <Dialog header="Add Nights and SightSeeings" visible={visible} onHide={onHide} footer={footer}>
//     <div className='flex flex-col space-y-4'>
//         {cities.map(city => (
//             <div key={city.id} className='flex flex-row items-center justify-between'>
//                 <label className='font-bold'>{city.city_name}</label>
//                 <div className='flex flex-col space-y-1'>
//                     <div className="flex align-items-center">
//                         <label className="mx-2">Number Of Nights:</label>
//                         <Button icon="pi pi-minus" onClick={() => decrementNights(city.id)} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
//                         <label className="mx-2 border-2 border-gray-200 h-6 w-12 text-center">{nights[city.id]}</label>
//                         <Button icon="pi pi-plus" onClick={() => incrementNights(city.id)} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
//                     </div>
//                     <div className="flex align-items-center">
//                         <label className="mx-2">Inclusive SightSeeings:</label>
//                         <Button icon="pi pi-minus" onClick={() => decrementInclusiveSights(city.id)} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
//                         <label className="mx-2 border-2 border-gray-200 h-6 w-12 text-center">{inclusiveSights[city.id]}</label>
//                         <Button icon="pi pi-plus" onClick={() => incrementInclusiveSights(city.id)} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
//                     </div>
//                     <div className="flex align-items-center">
//                         <label className="mx-2">Exclusive SightSeeings:</label>
//                         <Button icon="pi pi-minus" onClick={() => decrementExclusiveSights(city.id)} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
//                         <label className="mx-2 border-2 border-gray-200 h-6 w-12 text-center">{exclusiveSights[city.id]}</label>
//                         <Button icon="pi pi-plus" onClick={() => incrementExclusiveSights(city.id)} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </div>
// </Dialog>
    );
};

export default NightsDialog;
