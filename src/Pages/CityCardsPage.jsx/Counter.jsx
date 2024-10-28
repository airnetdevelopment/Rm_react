import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const NightsDialog = ({ visible, onHide }) => {
    const [nights, setNights] = useState(1); 
    const [inclusivesights,setInclusiveSights] = useState(1);
    const [exclusivesights,setExclusiveSights] = useState(1);

    const incrementNights = () => {
        setNights(prevNights => prevNights + 1);
    };

    const decrementNights = () => {
        setNights(prevNights => (prevNights > 1 ? prevNights - 1 : prevNights));
    };

    const incrementInclusiveSights = () => {
        setInclusiveSights(prevInclusiveSights => prevInclusiveSights + 1);
    };

    const decrementInclusiveSights = () => {
        setInclusiveSights(prevInclusiveSights => (prevInclusiveSights > 1 ? prevInclusiveSights - 1 : prevInclusiveSights));
    };
    const incrementExclusiveSights = () => {
        setExclusiveSights(prevExclusiveSights => prevExclusiveSights + 1);
    };

    const decrementExclusiveSights = () => {
        setExclusiveSights(prevExclusiveSights => (prevExclusiveSights > 1 ? prevExclusiveSights - 1 : prevExclusiveSights));
    };

    const footer = (
        <div className='flex flex-row justify-center'>
            <Button className='bg-indigo-900 text-white p-2' label="Add" onClick={() => { /* Handle confirm action */ }} />
            {/* <Button label="Cancel" onClick={onHide} className="p-button-text bg-red-700 text-white p-2" /> */}
        </div>
    );

    return (
        <Dialog header="Add Nights and SightSeeings" visible={visible} onHide={onHide} footer={footer}>
            <div className='flex flex-row space-x-4 w-[48rem]'>
            <div className="flex align-items-center">
                <label className="mx-2">Number Of Nights:</label>
                <Button icon="pi pi-minus" onClick={decrementNights} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
                <label className="mx-2 border-2 border-gray-200 h-6 w-6">{nights} </label>
                <Button icon="pi pi-plus" onClick={incrementNights} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
            </div>
            <div className="flex align-items-center pl-3">
                <label className="mx-2">Inclusive SightSeeings:</label>
                <Button icon="pi pi-minus" onClick={decrementInclusiveSights} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
                <label className="mx-2 border-2 border-gray-200 h-6 w-6">{inclusivesights}</label>
                <Button icon="pi pi-plus" onClick={incrementInclusiveSights} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
            </div>
            <div className="flex align-items-center pl-3">
                <label className="mx-2">Exclusive SightSeeings:</label>
                <Button icon="pi pi-minus" onClick={decrementExclusiveSights} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
                <label className="mx-2 border-2 border-gray-200 h-6 w-6">{exclusivesights}</label>
                <Button icon="pi pi-plus" onClick={incrementExclusiveSights} className="p-button-outlined bg-red-500 text-white h-6 w-6" />
            </div>
            </div>
        </Dialog>
    );
};

export default NightsDialog;
