import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'primereact/resources/themes/saga-blue/theme.css';  // PrimeReact theme
import 'primereact/resources/primereact.min.css';  // PrimeReact core CSS
import { Card } from 'primereact/card';  // Import PrimeReact Card

const RouteMap = () => {
  // Coordinates for Delhi, Rome, Venice, Milan, and back to Delhi
  const route = [
    [28.6139, 77.2090],  // Delhi
    [41.9028, 12.4964],  // Rome
    [45.4408, 12.3155],  // Venice
    [45.4642, 9.1900],   // Milan
    [28.6139, 77.2090]   // Back to Delhi
  ];

  return (
    <div className="p-grid p-justify-center" style={{height:"400px"}}>
      {/* PrimeReact Card with 70% width */}
      <div className="p-col-12 p-md-10 p-lg-7" style={{height:"400px"}}>
        <Card>
          {/* Map Container */}
          <MapContainer center={[38.6139, 67.2090]} zoom={3} style={{ height: "500px", width: "100%" }} scrollWheelZoom={false} >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {/* Draw polyline for the route */}
            <Polyline positions={route} color="blue" />

            {/* Markers for each location */}
            <Marker position={[28.6139, 77.2090]}>
              <Popup>Delhi</Popup>
            </Marker>
            <Marker position={[41.9028, 12.4964]}>
              <Popup>Rome</Popup>
            </Marker>
            <Marker position={[45.4408, 12.3155]}>
              <Popup>Venice</Popup>
            </Marker>
            <Marker position={[45.4642, 9.1900]}>
              <Popup>Milan</Popup>
            </Marker>
          </MapContainer>
        </Card>
      </div>
    </div>
  );
};

export default RouteMap;
