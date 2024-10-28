import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from "primereact/button";
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/saga-blue/theme.css';  // Choose your theme
import 'primereact/resources/primereact.min.css';           // Core CSS
import 'primeicons/primeicons.css';   
// import { Avatar } from '@/components/lib/avatar/Avatar';

const TravellerModal =({ visible, onHide })=> {
    // const [visible, setVisible] = useState(false);
    const [travelerCountObj, setTravelerCountObj] = useState({
    rooms: [{ adultCount: 1, childCount: 0, adultsAge: [0], childrenAge: [] }]
    });
    const adultPossibleCount = 4; // Maximum number of adults per room
    const childPossibleCount = 3; // Maximum number of children per room

    const generateNumberArray = (count) => Array.from({ length: count }, (_, i) => i);

    const initializeAdultsAgeArr = (count, roomId) => {
        // Logic for initializing adult ages
    };

    const initializeChildrenAgeArr = (count, roomId) => {
        // Logic for initializing children ages
    };

    const updateAdultAge = (room, index) => {
        // Logic for updating adult age
    };

    const updateChildAge = (room, index) => {
        // Logic for updating child age
    };

    const addRoom = () => {
        setTravelerCountObj(prevState => ({
            rooms: [...prevState.rooms, { adultCount: 1, childCount: 0, adultsAge: [0], childrenAge: [] }]
        }));
    };

    const removeRoom = (index) => {
        setTravelerCountObj(prevState => ({
            rooms: prevState.rooms.filter((_, i) => i !== index)
        }));
    };

    const onConfirm = () => {
        // Logic for confirming the number of travelers
    };

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <div className="w-full h-8 flex justify-around items-center justify-center mb-4 p-5 underline">
                <h2 className="text-lg font-normal underline">Traveler Information</h2>
            </div>
        </div>
    );

    const footerContent = (
        <div>
          <div className=" bg-white flex items-center justify-evenly border-t absolute bottom-0 py-1">
                <div className="w-2/3 h-full flex items-center justify-center">
                    <p className="text-[10px]">Please confirm the number of traveling adults & children (with their ages at travel time).</p>
                </div>
                    <div className="w-1/3 h-full flex items-center justify-center">
                        <Button label="Apply" className="p-button-sm p-button-danger bg-red-600 text-white p-1" onClick={onConfirm} />
                    </div>
                </div>
          </div>
    );

    return (
        <div className="card flex justify-content-center">
            {/* <input type="text" placeholder="Click me to open dialog" onClick={() => setVisible(true)} /> */}
            <Dialog className="relative bg-white rounded-lg shadow-2xl border border-2 border-gray-300 p-3" visible={visible} onHide={onHide} modal header={headerElement} footer={footerContent} style={{ width: '26rem' }} >
        {/* <div className="relative bg-white rounded-lg shadow-2xl border border-2 border-gray-300"> */}
            <div className="mx-auto max-h-[26rem] pr-2 p-3">
                <div className="py-3 bg-white rounded-lg pb-10">
                    {/* <div className="w-full h-8 flex justify-around items-center mb-4">
                        <h2 className="text-lg font-normal underline">Traveler Information</h2>
                    </div> */}

                    {travelerCountObj.rooms.map((room, i) => (
                        <div key={i} className="h-auto relative mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm text-bold border-b font-bold" >Room {i + 1}</p>
                                {travelerCountObj.rooms.length > 1 && (
                                    <Button
                                        icon="pi pi-trash"
                                        className="p-button-rounded p-button-danger p-button-sm"
                                        onClick={() => removeRoom(i)}
                                        style={{ color: '#ff0000' }} 
                                    />
                                )}
                            </div>

                            <hr className="my-2 border-black" />

                            <div className="flex justify-between items-center mb-2 p-2">
                                <div className="flex items-center space-x-2">
                                    <p className="font-bold text-[12px]">Adults</p>
                                    <Dropdown
                                        value={room.adultCount}
                                        options={generateNumberArray(adultPossibleCount).slice(1).map(n => ({ label: n, value: n }))}
                                        onChange={(e) => initializeAdultsAgeArr(e.value, i)}
                                        className="text-sm"
                                        style={{ border: '1px solid gray' }}
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <div className="flex flex-col items-center">
                                        <p className="font-bold text-[12px]">Children</p>
                                        <p className="text-xs text-gray-600">[0 - 12 Years Old]</p>
                                    </div>
                                    <Dropdown
                                        value={room.childCount}
                                        options={generateNumberArray(childPossibleCount + 1).map(n => ({ label: n, value: n }))}
                                        onChange={(e) => initializeChildrenAgeArr(e.value, i)}
                                        className="text-sm"
                                        style={{ border: '1px solid gray' }}
                                    />
                                </div>
                            </div>

                            <hr className="my-1 border-gray-200" />

                            <div className="mt-[-5px] px-3 flex items-center flex-col p-2">
                                {room.adultCount > 0 && (
                                    <div className="mb-3">
                                        <h3 className="text-xs font-normal mb-1 text-gray-400">Enter Age</h3>
                                        <div className="grid grid-cols-3 gap-4">
                                            {room.adultsAge.map((age, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <h4 className="text-[11px] font-bold">Adult {index + 1}:</h4>
                                                    <InputNumber
                                                        value={age}
                                                        onValueChange={(e) => updateAdultAge(room, index)}
                                                        className="text-xs h-6 text-center w-6"
                                                        style={{ border: '1px solid gray' }}
                                                        // inputStyle={{ textAlign: 'center' }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {room.childCount > 0 && (
                                    <div className="mb-4">
                                        <div className="grid grid-cols-3 gap-4">
                                            {room.childrenAge.map((age, j) => (
                                                <div key={j} className="flex items-center gap-3">
                                                    <h4 className="text-[11px] font-bold">Child {j + 1}:</h4>
                                                    <InputNumber
                                                        value={age}
                                                        onValueChange={(e) => updateChildAge(room, j)}
                                                        className="text-xs w-10 h-6 text-center"
                                                        style={{ border: '1px solid gray' }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="w-full flex justify-end items-center my-2 mt-10">
                        <Button label="Add Room" className="p-button-sm p-button-info bg-cyan-500 text-white p-1" onClick={addRoom} />
                    </div>

                    {/* <div className=" bg-white flex items-center justify-evenly border-t absolute bottom-0 py-1">
                        <div className="w-2/3 h-full flex items-center justify-center">
                            <p className="text-[10px] px-3">Please confirm the number of traveling adults & children (with their ages at travel time).</p>
                        </div>
                        <div className="w-1/3 h-full flex items-center justify-center">
                            <Button label="Apply" className="p-button-sm p-button-danger" onClick={onConfirm} />
                        </div>
                    </div> */}
                </div>
            </div>
            
        {/* </div> */}
            </Dialog>
        </div>
    )

  
    
}

export default TravellerModal;
