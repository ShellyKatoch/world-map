import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import worldGeoJSON from './components/world-geo.json';  // Use a GeoJSON for world map

const App = () => {
  const handleCountryClick = (event) => {
    const countryName = event.target.feature.properties.ADMIN;  // Get country name from GeoJSON
    // Fetch country details based on clicked country (e.g., using REST Countries API)
    console.log(countryName);
  };

  return (
    <MapContainer center={[20, 10]} zoom={2} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={worldGeoJSON} onEachFeature={(feature, layer) => {
        layer.on('click', handleCountryClick);
      }} />
    </MapContainer>
  );
};

export default App;
