import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons
import { eventsArr } from './PackageArray';
import './EventTable.css';
import SecurityCheck from './SecurityCheck';
import Lounge from './Lounge';
import Leisure from './Leisure';
import Commute from './Commute';
import Sight from './Sight';


const EventTable = ({ eventsArr }) => {
  // Prepare data for DataTable
  const prepareEventData = () => {
    const eventData = [];
    

    eventsArr.forEach(eventGroup => {
      if (eventGroup.eventType === "interCity") {
        eventGroup.events.forEach(event => {

            // Skip if event type is exactly 'flight' or 'hotel'
          const eventType = event.event.type.toLowerCase();
          if (eventType === 'flight' || eventType === 'hotel'||eventType === 'transit' || eventType === 'check-in'||eventType === 'check-out' ) {
            return; // Skip this event
          }

          const eventDate = new Date(event.event.start).toISOString().split('T')[0]; // Format date
          
          if (!eventData[eventDate]) {
            eventData[eventDate] = [];
          }

          eventData[eventDate].push(event.event);
        });
      } 
      else if (eventGroup.eventType === "intraCity") {
        eventGroup.events.forEach(event => {
          event.eventsOnDate.forEach(innerEvent => {

              // Skip if event type is exactly 'flight' or 'hotel'
              const eventType = innerEvent.event.type.toLowerCase();
              if (eventType === 'flight' || eventType === 'hotel'||eventType === 'transit' || eventType === 'check-in'||eventType === 'check-out') {
                return; // Skip this event
              }

            // const eventDate = new Date(event.date).toISOString().split('T')[0];

           // Function to format date to dd-mm-yyyy
             const formatDate = (dateString) => {
             const date = new Date(dateString);
             const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero if needed
             const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based index) and pad
             const year = date.getFullYear(); // Get full year

             return `${day}-${month}-${year}`; // Return formatted date 
             };

             // Safely access the event date
             if (event && event.date) {
             const eventDate = formatDate(event.date);
             console.log(eventDate); // Outputs: 25-10-2024
             } else {
             console.error('Event date is undefined');
             }
            const eventDate = formatDate(event.date);
            
            if (!eventData[eventDate]) {
              eventData[eventDate] = [];
            }

            eventData[eventDate].push(innerEvent.event);
          });
        });
      }
    });

      // Log each row's data to console
      Object.keys(eventData).forEach(date => {
        console.log({
          date,
          events: eventData[date] // Array of events for the same date
        });
      });

       // Convert eventData object to an array format that the DataTable can use
       return Object.keys(eventData).map(date => ({
        date,
        events: eventData[date], // Array of events for the same date
      }));
    };

  const eventData = prepareEventData();

  // Check functions for event types
  const isCommuteEvent = (event) => {
    return event.type === "commute-sight-hotel" || 
           event.type === "commute-hotel-sight" || 
           event.type === "commute-hotel-airport" || 
           event.type === "commute-airport-hotel";
  };

  const isLeisureEvent = (event) => {
    return event.type === "leisure";
  };

  const isLoungeEvent = (event) => { 
    return event.type === "return-lounge" || event.type === "incoming-lounge";
  };

  // const isCheckInEvent = (event) => {
  //   return event.type === "check-in";
  // };

  const isSightEvent = (event) => {
    return event.type === "sight";
  };

 
  // Render components dynamically based on event type
  const renderEventComponent = (event) => {
    if (isCommuteEvent(event)) {
      return <Commute title={event.title} />;
    } else if (isLoungeEvent(event)) {
      return <Lounge title={event.title} />;
    } else if (isLeisureEvent(event)) {
      return <Leisure title={event.title} />;
    } else if (isSightEvent(event)) {
      return <Sight title={event.title} />; // Customize for sight events if needed
    }
    // Add more conditions for other types of events
    return <div>{event.title}</div>;
  };

    // Template to render events in separate divs in the same row
    const eventTemplate = (rowData) => {
      return (
        <div className='flex overflow-x-auto w-[49rem]'>
          {rowData.events.map((event, index) => (
            
            <div key={index} className="event-div">
              {renderEventComponent(event)} {/* Render event components */}
            </div>
            
          ))}
        </div>
      );
    };

  return (
    <div className='event-table-container'>
    <DataTable value={eventData} className="mt-4 no-header border-1 border-indigo-900 w-full overflow-hidden" showGridlines>
      <Column field="date" header={null} className="mt-4 no-header w-full border-r-2 overflow-hidden" />
      <Column field="events" header={null} body={eventTemplate} />
    </DataTable> 
  </div>
  );
};

export default EventTable;
