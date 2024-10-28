import React from 'react';

const PaymentComponent = () => {
    return (
        <div className="h-screen w-screen flex items-start justify-end pt-20 pr-8">
            <section className="h-[25rem] w-[18rem] bg-indigo-900 rounded-lg border-2 border-gray-600 shadow-xl">
                <div className="h-[13rem] w-full p-4 rounded-lg shadow-md overflow-y-auto">
                    <div className="h-full w-full flex flex-col text-sm font-medium text-white">
                        {/* Total Published Cost */}
                        <div className="flex h-1/5 items-center justify-between px-4">
                            <label htmlFor="total-package-cost">Total Published Cost</label>
                            {/* <p>₹{paymentDetails.totalPublishedCost}</p> */}
                        </div>
                        
                        {/* Incentive Earned */}
                        <div className="flex h-1/5 items-center justify-between px-4">
                            <label htmlFor="incentive-earned">Incentive Earned</label>
                            {/* <p className="text-green-400">₹{paymentDetails.incentiveEarned}</p> */}
                        </div>
                    
                        {/* TDS */}
                        <div className="flex h-1/5 items-center justify-between px-4">
                            <label htmlFor="tds">TDS</label>
                            {/* <p>₹{paymentDetails.tds}</p> */}
                        </div>
                    
                        {/* Platform Cost */}
                        <div className="flex h-1/5 items-center justify-between px-4">
                            <label htmlFor="platform-cost">Platform Cost</label>
                            {/* <p>₹{paymentDetails.platformCost}</p> */}
                        </div>
                    
                        {/* Payment Gateway Fee */}
                        <div className="flex h-1/5 items-center justify-between px-4">
                            <label htmlFor="payment-gateway-fee">Payment Gateway Fee</label>
                            {/* <p>₹{paymentDetails.paymentGatewayFee}</p> */}
                        </div>
                    </div>
                </div>
                <hr className="h-[3px] text-gray-100" />
                
                <div className="h-[7rem] w-full flex flex-col items-center justify-center">
                    <div className="w-full flex items-center justify-start ml-12">
                        <p className="text-md font-medium text-white">Total Trip Cost</p>
                    </div>
                    <div className="w-full flex flex-col items-end justify-center mr-32">
                        {/* <p className="text-2xl font-medium text-white">Rs.{paymentDetails.totalTripCost}</p> */}
                        <p className="text-gray-400 text-xs">Incl. of all taxes</p>
                    </div>
                </div>
                <hr className="h-[3px] text-gray-100" />
                
                <div className="h-[calc(100%-13rem-7rem-6px)] w-full flex items-center justify-center p-6">
                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200">
                            Save
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition duration-200">
                            Proceed
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentComponent;
