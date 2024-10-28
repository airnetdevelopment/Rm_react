import React from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup,useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'primereact/resources/themes/saga-blue/theme.css';  // PrimeReact theme
import 'primereact/resources/primereact.min.css';  // PrimeReact core CSS
import { Card } from 'primereact/card';  // Import PrimeReact Card
import { useState,useEffect } from "react";


const RouteMap1=({ route = [] })=>{
  const [center, setCenter] = useState([0, 0]);  

  console.log(route); // Log the route to see if it is undefined

  useEffect(() => {
    if (route && route.length > 0) {
      // Calculate the average center of the route
      const latSum = route.reduce((sum, coords) => sum + coords[0], 0);
      const lngSum = route.reduce((sum, coords) => sum + coords[1], 0);
      const avgCenter = [latSum / route.length, lngSum / route.length];
      setCenter(avgCenter);
    }
  }, [route]);

  const FitBounds = () => {
    const map = useMap();

    useEffect(() => {
      if (route && route.length > 0) {
        const bounds = route.map(coords => [coords[0], coords[1]]);
        map.fitBounds(bounds); // Fit map to bounds of the route
      }
    }, [route, map]);

    return null; // This component doesn't render anything
  };

return(
<div>
    <Card title="Travel Route Map" style={{ padding: '20px' }}>
          <MapContainer center={[0, 0]} zoom={2} style={{ height: "500px", width: "100%" }} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {/* Draw polyline for the route */}
            <Polyline positions={route} color="blue" />
            {/* Markers for each location */}
            {route.map((coords, index) => (
              <Marker key={index} position={coords}>
                <Popup>{`Location ${index + 1}`}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Card>
        </div>
);


}

export default RouteMap1;



