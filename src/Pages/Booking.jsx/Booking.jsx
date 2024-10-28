import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';

const GetBookingDetails = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeTravellerIndex, setActiveTravellerIndex] = useState(0);

  return (
    <main className="flex flex-col w-full mb-4 ml-2 mr-4">
      {/* SERVICES */}
      <div className="p-card">
        <div className="py-2 flex items-center justify-center">
          <p className="text-center text-lg font-bold tracking-wide">
            Services Details
          </p>
        </div>

        <div className="max-w-full p-2">
          {/* Toggle between services */}
          <div className="flex border-b rounded-lg justify-center mb-4">
            <Button
              label="Flights"
              className={activeServiceIndex === 0 ? 'p-button-primary' : ''}
              onClick={() => setActiveServiceIndex(0)}
            />
            <Button
              label="Hotels"
              className={activeServiceIndex === 1 ? 'p-button-primary' : ''}
              onClick={() => setActiveServiceIndex(1)}
            />
            <Button
              label="Sightseeing"
              className={activeServiceIndex === 2 ? 'p-button-primary' : ''}
              onClick={() => setActiveServiceIndex(2)}
            />
          </div>

          {/* Flight Details */}
          {activeServiceIndex === 0 && (
            <div className="p-2">
              {/* Traveller Tabs */}
              <TabView activeIndex={activeTravellerIndex} onTabChange={(e) => setActiveTravellerIndex(e.index)}>
                <TabPanel header="Traveller 1">
                  {/* Traveller 1 Flight Details */}
                  <Card className="mb-4">
                    <div className="py-1 flex items-center justify-center">
                      <h3 className="text-md text-primary p-1 pl-2 font-semibold text-center mb-1">
                        Traveller Name: Mr. Rajni Kanth
                      </h3>
                    </div>

                    <div className="p-1 rounded mt-0">
                      <div className="rounded-lg mt-1 mb-4">
                        <div className="flex justify-between items-center bg-gray-200 px-4 py-2 font-bold rounded-lg">
                          <div className="flex items-center">
                            <div className="flex flex-col items-center mr-7">
                              <img
                                src="path/to/flight-icon.svg"
                                alt="Flight Icon"
                                className="w-5 h-5 mb-2"
                              />
                              <div className="flex flex-col text-center">
                                <span className="text-xs">6E</span>
                                <span className="text-xs">1234</span>
                              </div>
                            </div>
                            <div className="text-xl">
                              <p>1. Delhi to Milan</p>
                            </div>
                          </div>
                          <i className="pi pi-chevron-down"></i>
                        </div>

                        <div className="p-4">
                          <h4 className="text-md font-semibold underline">
                            Flight Details
                          </h4>
                          <div className="flex w-full p-1 py-2">
                            <div className="w-1/3">
                              <p>Flight Number: 1234</p>
                              <p>Airline: Air India</p>
                              <p>Class: Economy</p>
                              <p>Duration: 7h 30m</p>
                            </div>

                            <div className="w-1/3">
                              {/* SVG Flight Path */}
                              <div className="flex justify-center">
                                <svg width="200" height="50">
                                  <line
                                    x1="10"
                                    y1="25"
                                    x2="190"
                                    y2="25"
                                    stroke="#666"
                                    strokeWidth="2"
                                  />
                                  <circle cx="10" cy="25" r="5" />
                                  <circle cx="190" cy="25" r="5" />
                                  <text x="0" y="15" fontSize="12">Delhi</text>
                                  <text x="170" y="15" fontSize="12">Milan</text>
                                </svg>
                              </div>
                            </div>

                            <div className="w-1/3">
                              <p>PNR: XYZ123</p>
                              <p>Status: Confirmed</p>
                              <p>Baggage: 23kg</p>
                            </div>
                          </div>

                          <div className="flex justify-end gap-2">
                            <Button label="View E-Ticket" icon="pi pi-ticket" className="p-button-primary" />
                            <Button label="Cancel" className="p-button-danger" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabPanel>

                <TabPanel header="Traveller 2">
                  <Card className="mb-4">
                    {/* Traveller 2 details */}
                    <h3>Traveller 2 Flight Details here...</h3>
                  </Card>
                </TabPanel>
              </TabView>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default GetBookingDetails;
