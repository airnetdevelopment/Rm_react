import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import 'primereact/resources/themes/saga-blue/theme.css';  // Choose your desired theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Tooltip } from 'primereact/tooltip';
import nonrefundable from '../../assets/Iconslatestpackage/nonrefundable.png';
import refundable from '../../assets/Iconslatestpackage/refundable.png';
import notavailable from '../../assets/Iconslatestpackage/notavailable.png';
import available from '../../assets/Iconslatestpackage/available.png';
import coachclass from '../../assets/Iconslatestpackage/coach-class.png';
import { Image } from 'primereact/image';
import group from '../../assets/Iconslatestpackage/group.png';
import sedan from '../../assets/Iconslatestpackage/sedan-car-model.png';
import timeleft from '../../assets/Iconslatestpackage/time-left.png';
import seat from '../../assets/Iconslatestpackage/seat.png';
import luggage from '../../assets/Iconslatestpackage/luggage.png';


const TransitCategoryWise = () => {
  return (
    <div className="transit-container w-[50rem] mb-6 bg-white rounded-lg">
       <h3 className="text-lg font-bold text-black text-left mb-4">TRANSITS</h3>
            {/* Transit Card 1 */}        
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
              <div className="flex justify-between items-center border-b border-gray-200 p-4 bg-gray-100">
                <div>
                  <h3 className="text-lg text-left font-bold ml-[-3px]">Rome to Florence</h3>
                  <div className="text-sm text-gray-600 text-left">
                    <span>1 Sep,2024</span>
                    <span className="mx-2">⟶</span>
                    <span>1 Sep,2024</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Tooltip target=".info-button" content="More Info" />
                  <Button label="i" className="info-button text-gray-500 border border-black h-8 w-6" />
                  <Tooltip target=".change-button" content="Change Transit" />
                  <Button label="Change" className="change-button text-gray-500 border border-black h-8 w-16" />
                </div>
              </div>
              <Divider />
              <div className="flex p-4">
                <img src="assets/images/car-image.png" alt="Car" className="w-48 h-auto rounded-lg mr-6" />
                <div className="flex-1">
                  <div className="flex items-center text-sm mb-2">
                    <span className="flex items-center">
                      <img src={seat} alt="Private Transfer" className="w-4 h-4 mr-2" />
                      <span>Private Transfer</span>
                    </span>
                    <span className="flex items-center">
                      <img src={group} alt="Group Icon" className="w-4 h-4 ml-2 mr-2" />
                      <span>2 Passengers</span>
                    </span>
                  </div>
                  <div className="flex items-center text-sm mb-2">
                    <img src={luggage} alt="Luggage Icon" className="w-4 h-4 mr-2" />
                    <span>1 Luggage</span>
                  </div>
                  <div className="flex items-center text-sm mb-2">
                    {/* <img src="assets/icons/Iconslatestpackage/pickup.png" alt="Pickup Icon" className="w-4 h-4 mr-2" /> */}
                    <div className="flex">
                                <span>
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                </span>           
                    <span> Pickup from Hotel</span>
                  </div></div>
    
                  <div className="flex items-center text-sm mb-2">
                    {/* <img src="assets/icons/Iconslatestpackage/pickup.png" alt="Pickup Icon" className="w-4 h-4 mr-2" /> */}
                    <div className="flex">
                                <span>
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                </span>           
                    <span> Drop At Airport</span>
                  </div>
                  </div>
                </div>
              </div>
              </div>
            

            {/* Transit Card 2 */}   
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">   
              <div className="flex justify-between items-center border-b border-gray-200 p-4 bg-gray-100">
                <div>
                  <h3 className="text-lg font-bold">Milan Airport To IH Hotels Milano Ambasciatori</h3>
                  <p className="text-sm text-gray-600 text-left">Thu, Sept 03, 2024</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Tooltip target=".info-button" content="More Info" />
                  <Button label="i" className="info-button text-gray-500 border border-black h-8 w-6" />
                  <Tooltip target=".change-button" content="Change Transit" />
                  <Button label="Change" className="change-button text-gray-500 border border-black h-8 w-16" />
                </div>
              </div>
              <Divider />
              <div className="flex p-4">
                <img src="assets/images/car-image.png" alt="Car" className="border-2 border-gray-200 w-48 h-auto rounded-lg mr-6" />
                <div className="flex-1">
                  <div className="flex items-center text-sm mb-2">
                    <span className="flex items-center">
                      <img src={seat} alt="Private Transfer" className="w-4 h-4 mr-2" />
                      <span>Private Transfer</span>
                    </span>
                    <span className="flex items-center">
                      <img src={group} alt="Group Icon" className="w-4 h-4 ml-2 mr-2" />
                      <span>2 Passengers</span>
                    </span>
                  </div>
                  <div className="flex items-center text-sm mb-2">
                    <img src={luggage} alt="Luggage Icon" className="w-4 h-4 mr-2" />
                    <span>1 Luggage</span>
                  </div>
                  <div className="flex items-center text-sm mb-2">
                    {/* <img src="assets/icons/Iconslatestpackage/pickup.png" alt="Pickup Icon" className="w-4 h-4 mr-2" /> */}
                    <div className="flex">
                                <span>
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                </span>           
                    <span> Pickup from Hotel</span>
                  </div></div>
    
                  <div className="flex items-center text-sm mb-2">
                    {/* <img src="assets/icons/Iconslatestpackage/pickup.png" alt="Pickup Icon" className="w-4 h-4 mr-2" /> */}
                    <div className="flex">
                                <span>
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                </span>           
                    <span> Drop At Airport</span>
                  </div>
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-sm font-bold mb-3">VEHICLE TYPES</p>
                  <div className="flex flex-row bg-gray-200 p-1 shadow-lg">                 
                <span><img src={sedan} alt="Luggage Icon" className="w-12 h-8 mr-3" /></span>
                  <span className='font-bold'>Sedan</span></div>
                </div>
              </div>
              </div>
            

            {/* Transit Card 3 */}   
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
              <div className="flex justify-between items-center border-b border-gray-200 p-4 bg-gray-100">
                <div>
                  <h3 className="text-lg font-bold text-black">Milan Centrale To Padova</h3>
                  <p className="text-sm text-gray-600 text-left">Thu, Sept 05, 2024</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Tooltip target=".info-button" content="More Info" />
                  <Button label="i" className="info-button text-gray-500 border border-black h-8 w-6" />
                  <Tooltip target=".change-button" content="Change Transit" />
                  <Button label="Change" className="change-button text-gray-500 border border-black h-8 w-16" />
                </div>
              </div>
              <Divider />
              <div className="flex p-4">
              <img src="assets/images/train-image.png" alt="Train" className="border-2 border-gray-200 w-48 h-auto rounded-lg mr-6" />
                <div className="flex-1">
                  <div className="flex items-center text-sm mb-3 ml-4">
                  <span className="flex items-center mr-4">
                      <img src={timeleft} alt="Time Left" className="w-4 h-4 mr-2" />
                      <span>4 Hrs</span>
                    </span>
                    <span className="flex items-center">
                      <img src={refundable} alt="Refundable" className="w-4 h-4 mr-2" />
                      <span>Refundable</span>
                    </span>
                  </div>
                  <div className="flex items-left space-x-12 ml-4 mb-5">
                    <div className="flex-col text-left">
                      <div className="text-lg font-bold">Milan Centrale</div>
                      <div className="flex">
                        <div className="text-sm">Sep 05, 2024</div>
                        <div className="text-sm ml-3">9:00</div>
                      </div>
                      <div className="text-sm">Train Line: 8097</div>
                    </div>
                    <div className="flex-col mt-5">
                    <div className="flex text-sm text-black font-bold justify-center">50 min</div>
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-1 bg-yellow-300"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full mx-2 my-1"></div>
                        <div className="w-16 h-1 bg-yellow-300"></div>
                      </div>
                      <div className="flex text-sm text-blue-400 justify-center">Non-stop</div>
                    </div>
                    <div className="flex-col text-left">
                      <div className="text-lg font-bold">Padova</div>
                      <div className="flex">
                        <div className="text-sm">Sep 05, 2024</div>
                        <div className="text-sm ml-3">11:00</div>
                      </div>
                      <div className="text-sm">Train Line: 8097</div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
    </div>
  );
};

export default TransitCategoryWise;

