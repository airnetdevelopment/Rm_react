import React from "react";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
// Import PrimeReact theme
import 'primereact/resources/themes/saga-blue/theme.css'; // Example theme
import 'primereact/resources/primereact.min.css';         // Core PrimeReact styles
import 'primeicons/primeicons.css';  

const PaymentDetails =()=>{
 return(

<div className="h-[25rem] w-[18rem] bg-indigo-900 text-white rounded-lg border-2 border-gray-600 shadow-xl mt-20 mr-5">
               
               <div className="h-[13rem]  w-full p-4 rounded-lg shadow-md overflow-y-auto">
                   <div className="h-full w-full flex flex-col text-sm font-bold text-white">
                       {/* <!-- Total Published Cost --> */}
                       <div className="flex h-1/5 items-center justify-between px-4">
                           <label for="total-package-cost">Total Published Cost</label>
                           <p>₹ 10000</p>
                       </div>
                       
                       {/* <!-- Incentive Earned --> */}
                       <div className="flex h-1/5 items-center justify-between px-4">
                           <label for="incentive-earned">Incentive Earned</label>
                           <p class="text-green-400">₹ 500</p>
                       </div>
                   
                       {/* <!-- TDS --> */}
                       <div className="flex h-1/5 items-center justify-between px-4">
                           <label for="tds">TDS</label>
                           <p>₹ 25 </p>
                       </div>
                   
                       {/* <!-- Platform Cost --> */}
                       <div className="flex h-1/5 items-center justify-between px-4">
                           <label for="platform-cost">Platform Cost</label>
                           <p>₹ 2360</p>
                       </div>
                   
                       {/* <!-- Payment Gateway Fee --> */}
                       <div className="flex h-1/5 items-center justify-between px-4">
                           <label for="payment-gateway-fee">Payment Gateway Fee</label>
                           <p>₹ 207.99</p>
                       </div>
                   </div>
               </div>
               <hr class="h-[3px] text-white-100"></hr>
               {/* <Divider style={{ backgroundColor: 'blue', height: '3px', width: '80%', display: 'block' }} /> */}
               {/* <Divider style={{ backgroundColor: 'white', height: '5px', width: '80%', display: 'block', margin: '20px auto',zIndex: 100 }} /> */}
              

               <div className="h-[7rem]  w-full flex flex-col items-center justify-center">
                   <div className="w-full flex items-center justify-start ml-12">
                       <p className="text-md font-bold text-white">Total Trip Cost</p>
                   </div>
                   <div className="w-full flex flex-col items-end justify-center mr-32">
                       <p class="text-2xl font-medium text-white">Rs.12092.99</p>
                       <p className="text-gray-400 text-xs">Incl. of all taxes</p>
                   </div>
               </div>
               {/* <hr class="h-[3px] text-gray-100"> */}
               {/* <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
               <Divider style={{ backgroundColor: 'blue', height: '3px', width: '80%' }} />
               </div> */}

               {/* <Divider style={{ backgroundColor: 'white', height: '3px', width: '80%' }} /> */}
               
               <div className="h-[calc(100%-13rem-7rem-6px)]  w-full flex items-center justify-center p-6">
                   {/* <div className="flex space-x-4">
        
                       <button  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200">
                           Save
                       </button>
                       <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition duration-200">
                           Proceed
                       </button>
                   </div> */}
                   <div className='flex justify-center flex-row space-x-4 h-16 mt-4 mr-4'>
                  <Button label="Save" severity="info" className='mt-3 text-indigo-900 font-bold p-2 text-sm h-10 w-28' style={{ backgroundColor: 'white'}} raised />
                  <Button label="Proceed" severity="success" className='mt-3 p-2 text-sm h-10 w-24 text-indigo-900 font-bold' style={{ backgroundColor: 'white'}} raised />
                </div>
               </div>
           </div>

 );

}

export default PaymentDetails;