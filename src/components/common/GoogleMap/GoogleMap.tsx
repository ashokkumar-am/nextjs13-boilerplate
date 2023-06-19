"use client"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  markers: {
    lat: number;
    lng: number;
    title: string;
  }[];
}

const RGoogleMap: React.FC<MapProps> = ({ center, zoom, markers }) => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        {markers.map((marker) => (
          <Marker key={marker.title} position={marker} title={marker.title} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default RGoogleMap;
