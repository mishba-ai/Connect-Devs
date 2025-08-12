import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const position = [51.505, -0.09];

export default function Map() {
  useEffect(() => {
    // Add custom CSS for map styling with black primary background
    const style = document.createElement('style');
    style.textContent = `
      .black-primary-map {
        background-color: black !important;
      }
      
      .black-primary-map .leaflet-tile-pane {
        background-color: black !important;
      }
      
      .black-primary-map .leaflet-tile {
        filter: invert(1) grayscale(100%) brightness(0.8) contrast(1.2);
        opacity: 0.7;
        background-color: black !important;
      }
      
      .black-primary-map .leaflet-control-zoom a {
        background-color: #ceff1a !important;
        color: black !important;
        border: 2px solid white !important;
        font-weight: bold !important;
      }
      
      .black-primary-map .leaflet-control-zoom a:hover {
        background-color: white !important;
        color: black !important;
        border: 2px solid #ceff1a !important;
      }
      
      .black-primary-map .leaflet-popup-content-wrapper {
        background-color: #ceff1a !important;
        color: black !important;
        border: 2px solid white !important;
        border-radius: 4px !important;
        font-weight: 500 !important;
      }
      
      .black-primary-map .leaflet-popup-tip {
        background-color: #ceff1a !important;
        border: 2px solid white !important;
        border-top: none !important;
        border-right: none !important;
      }
      
      .black-primary-map .leaflet-container {
        background-color: black !important;
      }
      
      .black-primary-map .leaflet-control-attribution {
        background-color: rgba(206, 255, 26, 0.9) !important;
        color: black !important;
        border: 1px solid white !important;
        font-size: 10px !important;
      }
      
      .black-primary-map .leaflet-control-attribution a {
        color: black !important;
        text-decoration: underline !important;
        font-weight: bold !important;
      }
      
      /* Ensure all map layers have black background */
      .black-primary-map .leaflet-map-pane {
        background-color: black !important;
      }
      
      .black-primary-map .leaflet-layer {
        background-color: black !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-[550px] h-[350px] border-2 shadow-[4px_4px_0px_rgb(0,0,0)] border-black rounded-xs overflow-hidden bg-black">
      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false}
        className="black-primary-map"
        style={{ 
          height: "100%", 
          width: "100%", 
          backgroundColor: "black" 
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div style={{ padding: '4px' }}>
              <strong>Map Location</strong> <br /> 
              Black primary background!
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}