import  { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";  // Choose your theme
import "primereact/resources/primereact.min.css";           // Core CSS
import "primeicons/primeicons.css";   

const TravellerModal = ({ visible, onHide,travelerInfoSubmission }) => {
    const [travelerCountObj, setTravelerCountObj] = useState({
        rooms: [{ adultCount: 1, childCount: 0, adultsAge: [0], childrenAge: [] }]
    });
    const adultPossibleCount = 9; // Maximum number of adults per room
    const childPossibleCount = 3; // Maximum number of children per room

    const generateUuid = () => "_" + Math.random().toString(36).substr(2, 9);

    const generateNumberArray = (count) => Array.from({ length: count }, (_, i) => i);

    const initializeAdultsAgeArr = (count, index) => {
        setTravelerCountObj(prevState => {
            const updatedRooms = prevState.rooms.map((room, roomIndex) => {
                if (roomIndex === index) {
                    return { ...room, adultsAge: Array(count).fill(0) };
                }
                return room;
            });
            return { ...prevState, rooms: updatedRooms };
        });
    };

    const initializeChildrenAgeArr = (count, index) => {
        setTravelerCountObj(prevState => {
            const updatedRooms = prevState.rooms.map((room, roomIndex) => {
                if (roomIndex === index) {
                    return { ...room, childrenAge: Array(count).fill(0) };
                }
                return room;
            });
            return { ...prevState, rooms: updatedRooms };
        });
    };

    const updateAdultAge = (roomIndex, index, value) => {
        setTravelerCountObj(prevState => {
            const updatedRooms = prevState.rooms.map((room, roomIdx) => {
                if (roomIdx === roomIndex) {
                    const updatedAdultsAge = [...room.adultsAge];
                    updatedAdultsAge[index] = value;
                    return { ...room, adultsAge: updatedAdultsAge };
                }
                return room;
            });
            return { ...prevState, rooms: updatedRooms };
        });
    };

    const updateChildAge = (roomIndex, index, value) => {
        setTravelerCountObj(prevState => {
            const updatedRooms = prevState.rooms.map((room, roomIdx) => {
                if (roomIdx === roomIndex) {
                    const updatedChildrenAge = [...room.childrenAge];
                    updatedChildrenAge[index] = value;
                    return { ...room, childrenAge: updatedChildrenAge };
                }
                return room;
            });
            return { ...prevState, rooms: updatedRooms };
        });
    };

    const addRoom = () => {
        const newRoom = {
            adultCount: 1,
            childCount: 0,
            id: generateUuid(),
            adultsAge: [0],
            childrenAge: []
        };
        setTravelerCountObj(prevState => ({
            rooms: [...prevState.rooms, newRoom]
        }));
    };

    const removeRoom = (index) => {
        setTravelerCountObj(prevState => ({
            rooms: prevState.rooms.filter((_, i) => i !== index)
        }));
    };

    const handleConfirm = () => {
        // const totalAdults = travelerCountObj.rooms.reduce((acc, room) => acc + room.adultCount, 0);
        // const totalChildren = travelerCountObj.rooms.reduce((acc, room) => acc + room.childCount, 0);
        travelerInfoSubmission(travelerCountObj);
        onHide(); // Close the modal
        // You can handle confirmation here
    };

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <div className="w-full h-8 flex items-center justify-center mb-4 p-5 underline">
                <h2 className="text-lg font-bold underline text-black">Traveler Information</h2>
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
                    <Button label="Apply" className="p-button-sm bg-red-600 text-white p-1" onClick={handleConfirm} />
                </div>
            </div>
        </div>
    );

    useEffect(() => {
        console.log(travelerCountObj);
    }, [travelerCountObj]);
    
    return (
        <div className="card flex justify-content-center">
            <Dialog className="relative bg-white rounded-lg shadow-2xl border-2 border-gray-300 p-1 mt-[-10px]"
                visible={visible}
                onHide={onHide}
                draggable ={false}
                modal
                header={headerElement} footer={footerContent}
                style={{ width: "26rem" }}>
                <div className="mx-auto max-h-[26rem] pr-1 p-1">

                    <div className="py-2 bg-white rounded-lg pb-10">
                        {travelerCountObj.rooms.map((room, i) => (
                            <div key={i} className="h-auto relative mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm text-bold text-black underline border-b font-bold">Room {i + 1}</p>
                                    {travelerCountObj.rooms.length > 1 && (
                                        <Button icon="pi pi-trash"
                                            className="p-button-rounded p-button-danger p-button-sm"
                                            onClick={() => removeRoom(i)} />
                                    )}
                                </div>

                                <hr className="my-2 border-black" />

                                <div className="flex justify-between items-center mb-2 p-2">
                                    <div className="flex items-center space-x-2">
                                        <p className="font-bold text-[12px]">Adults</p>
                                        <Dropdown
                                            value={room.adultCount}
                                            options={generateNumberArray(adultPossibleCount).slice(1).map(n => ({ label: n, value: n }))}
                                            onChange={(e) => {
                                                initializeAdultsAgeArr(e.value, i);
                                                setTravelerCountObj(prevState => {
                                                    const updatedRooms = [...prevState.rooms];
                                                    updatedRooms[i].adultCount = e.value; // Update adult count
                                                    return { ...prevState, rooms: updatedRooms };
                                                });
                                            }}
                                            className="text-xs h-8 w-12 md:w-14rem border-b-2 border-gray-200"
                                            style={{ border: "1px solid gray" }}
                                            itemTemplate={(option) => (
                                                <div className="py-1 px-4 text-black text-xs hover:bg-gray-100">
                                                    {option.label}  {/* Display the option label */}
                                                </div>
                                            )}
                                            panelTemplate={({ options }) => (
                                                <div className="bg-gray-800 rounded-lg shadow-lg">
                                                    {options.map((option) => (
                                                        <div 
                                                            key={option.value} 
                                                            className={`py-1 px-4 text-white text-xs hover:bg-gray-300 ${
                                                                room.adultCount === option.value ? "bg-green-500 text-white" : ""
                                                            }`}
                                                            onClick={() => {
                                                                initializeAdultsAgeArr(option.value, i);
                                                                setTravelerCountObj(prevState => {
                                                                    const updatedRooms = [...prevState.rooms];
                                                                    updatedRooms[i].adultCount = option.value;
                                                                    return { ...prevState, rooms: updatedRooms };
                                                                });
                                                            }}
                                                        >
                                                            {option.label}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
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
                                            onChange={(e) => {
                                                initializeChildrenAgeArr(e.value, i);
                                                setTravelerCountObj(prevState => {
                                                    const updatedRooms = [...prevState.rooms];
                                                    updatedRooms[i].childCount = e.value; // Update child count
                                                    return { ...prevState, rooms: updatedRooms };
                                                });
                                            }}
                                            className="text-xs w-12 h-8 md:w-14rem border-b-2 border-gray-200"
                                            style={{ border: "1px solid gray" }}  // Custom border
                                            itemTemplate={(option) => (
                                                <div className="py-1 px-4 text-black text-xs hover:bg-gray-100">
                                                    {option.label}  {/* Show option label */}
                                                </div>
                                            )} 
                                            panelTemplate={({ options }) => (
                                                <div className="bg-gray-800 rounded-lg shadow-lg">
                                                    {options.map((option) => (
                                                        <div 
                                                            key={option.value} 
                                                            className={`py-1 px-4 text-white text-sm hover:bg-gray-300 ${
                                                                room.childCount === option.value ? "bg-green-500 text-white" : ""
                                                            }`}
                                                            onClick={() => {
                                                                initializeChildrenAgeArr(option.value, i);
                                                                setTravelerCountObj(prevState => {
                                                                    const updatedRooms = [...prevState.rooms];
                                                                    updatedRooms[i].childCount = option.value;
                                                                    return { ...prevState, rooms: updatedRooms };
                                                                });
                                                            }}
                                                        >
                                                            {option.label}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
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
                                                    <div key={index} className="flex items-center gap-1">
                                                        <h4 className="text-[11px] font-bold">Adult {index + 1}:</h4>
                                                        <input
                                                            type="text"
                                                            value={age}
                                                            onChange={(e) => updateAdultAge(i, index, e.target.value)}
                                                            className="text-xs h-6 text-center custom-input" // Add your custom class
                                                            style={{
                                                                width: "50px", // Adjust to your desired width
                                                                padding: "2px", // Adjust padding if necessary
                                                                boxSizing: "border-box", // Ensure padding and border are included in width
                                                                border: "1px solid gray", // Border styling
                                                            }}
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
                                                      
                                                        <input
                                                            type="text"
                                                            value={age}
                                                            onChange={(e) => updateChildAge(i, j, e.target.value)}
                                                
                                                            className="text-xs h-6 text-center custom-input" // Add your custom class
                                                            style={{
                                                                width: "50px", // Adjust to your desired width
                                                                padding: "2px", // Adjust padding if necessary
                                                                boxSizing: "border-box", // Ensure padding and border are included in width
                                                                border: "1px solid gray", // Border styling
                                                            }}
                                                        />

                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end px-3 mt-[-30px]">
                        <Button label="Add Room" onClick={addRoom} className="bg-cyan-300 text-black text-sm rounded-md p-1" />
                    </div>
                </div>

            </Dialog>
        </div>
    );
};

export default TravellerModal;
