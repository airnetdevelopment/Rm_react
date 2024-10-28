import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import nonrefundable from '../../assets/Iconslatestpackage/nonrefundable.png';
import refundable from '../../assets/Iconslatestpackage/refundable.png';
import notavailable from '../../assets/Iconslatestpackage/notavailable.png';
import available from '../../assets/Iconslatestpackage/available.png';
import coachclass from '../../assets/Iconslatestpackage/coach-class.png';
import { Image } from 'primereact/image';
import group from '../../assets/Iconslatestpackage/group.png';

const HotelsCategoryWise = () => {
    // const [isHotelAvailable, setIsHotelAvailable] = useState(true);
    // const [cityItineraryDetails, setCityItineraryDetails] = useState({
        // cityEvents: [],
        // hotel: {},
    // });
    const [hotelId, setHotelId] = useState('');

    // useEffect(() => {
    //     if (eventUid) {
    //         setCityItineraryDetails(eventUid);
    //     }
    // }, [eventUid]);

    // const setCityItineraryDetails = (uid) => {
    //     // Assuming cityItineraryService is available
    //     cityItineraryService.getCityItineraryDetails(uid)
    //         .then((data) => {
    //             setCityItineraryDetails(data);
    //             setHotelId(data?.hotel?.event?.id);
    //         })
    //         .catch((err) => {
    //             console.error('Error fetching transit details', err);
    //         });
    // };

    // const toggleAvailability = () => {
    //     setIsHotelAvailable((prev) => !prev);
    // };

    // const getHotelName = () => {
    //     return cityItineraryDetails.hotel.hotelDetails?.detail?.hotel_name || 'unknown';
    // };

    // const getNumberOfNights = () => {
    //     const numberOfNights = cityItineraryDetails.cityEvents.length;
    //     return numberOfNights > 1 ? `${numberOfNights} Nights` : `${numberOfNights} Night`;
    // };

    // const getCityName = () => {
    //     return cityItineraryDetails.hotel.hotelDetails?.detail?.city_name || 'unknown';
    // };

    return (
        <div className="w-[50rem] mb-6 bg-white rounded-lg">
            <h3 className="text-lg font-bold text-black text-left mb-4">HOTELS</h3>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
                <div className="flex justify-between items-center border-b border-gray-200 p-4 bg-gray-100">
                    <div>
                        <h3 className="text-lg text-left font-bold">Hotel Ivory</h3>
                        <div className="flex items-center text-black text-sm mt-1 font-semibold">
                            <span>Thur,03 Sep,2024</span>
                            <span className="mx-2">⟶</span>
                            <span>Sat,05 Sep,2024</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Tooltip target=".info-button" content="More Info" />
                        <Button label="i" className="info-button text-gray-500 border border-black h-8 w-6" />
                        <Tooltip target=".change-button" content="Change Hotel" />
                        <Button label="Change" className="change-button text-gray-500 border border-black h-8 w-16" />
                    </div>
                </div>

                <div className="flex p-4 relative">
                    {/* {!isHotelAvailable ? (
                        <img
                            src="assets/icons/Iconslatestpackage/not-available.png"
                            alt="Not Available"
                            className="absolute top-2 right-2 w-24 h-8 rounded-lg mr-0"
                        />
                    ) : (
                        <img
                            src="assets/icons/Iconslatestpackage/available.png"
                            alt="Available"
                            className="absolute top-2 right-2 w-24 h-8 rounded-lg mr-0"
                        />
                    )} */}
                    <img src="hotel-image.jpg" alt="Hotel Image" className="w-48 h-auto rounded-lg mr-6" />
                    <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 text-left text-black">Deluxe Double Room</h4>
                        <div className="flex items-center text-sm mb-2">
                            <span className="flex items-center">
                            <Image src={available ? available : notavailable} alt={available ? "Available" : "Not Available"} className="absolute top-1 h-8 w-24 right-2 rounded-lg mr-0" />
                            <Image src={refundable ? refundable : nonrefundable} alt={refundable ? "Refundable" : "Non Refundable"} className="w-4 h-4 mr-2" />
                                <span className="mr-4">Refundable</span>
                            </span>
                            <span className="flex items-center">
                                <img src={group} alt="Icon" className="w-4 h-4 ml-2 mr-2" />
                                <span className="mr-4">Accommodate 2 Adults</span>
                            </span>
                        </div>
                        <div className="flex items-center text-sm mb-2">
                            <div className='flex items-center'>
                            <span className="mr-2 bg-gray-100 rounded-md p-2 text-black font-bold">4★ Hotel</span>
                            <span className="mr-2 bg-gray-100 rounded-md p-2 text-black font-bold">7.2/10</span>
                            <span className='mr-6'>Bookings.com</span>
                            </div>
                            <div className='flex items-center'>
                            <span className="mr-2 text-black font-bold">Check-In:</span>
                            <span className="mr-2 text-black">12:00 PM</span>
                            <span className="mr-2 text-black font-bold">Check-Out:</span>
                            <span className="mr-2 text-black">2:00 PM</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                            <div className="flex">
                                <span>
                                    <svg
                                        className="w-5 h-5 text-red-500 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span>Non-smoking rooms</span>
                            </div>
                            <div className="flex">
                                <span>
                                    <svg
                                        className="w-5 h-5 text-red-500 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span>Free WiFi</span>
                            </div>
                            <div className="flex">
                                <span>
                                    <svg
                                        className="w-5 h-5 text-red-500 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span>Bed And Breakfast</span>
                            </div>
                            <div className="flex">
                                <span>
                                    <svg
                                        className="w-5 h-5 text-red-500 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span>Air Conditioner</span>
                            </div>
                            <div className="flex">
                                <span>
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                                <span>Terrace</span>
                            </div>
                            <div className="flex">
                                <span>
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                                <span>Bar</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex p-2">
                    <p className="text-gray-500 text-xs mb-2">
                        FYI: Hotels may charge a caution deposit on your credit card. It will be refunded within 10-15 days if there is no property damage.
                    </p>
                    <a href="#" className="text-blue-500 text-sm ml-8">+2 Alerts</a>
                </div>
            </div>
        </div>
    );
};

export default HotelsCategoryWise;
