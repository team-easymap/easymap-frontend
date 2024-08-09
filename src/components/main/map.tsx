import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import * as L from 'leaflet';
import { useLocationStore } from '@/store/location';
import { useEffect, useMemo } from 'react';
import MyLocationComponent from './location';
import MyMarker from './myMarker';
import 'leaflet/dist/leaflet.css';

const MainMap = () => {
  const key = import.meta.env.VITE_VWORLD_API_KEY;
  const url = import.meta.env.VITE_VWORLD_API_URL;

  const myLocation = useLocationStore((state) => state.myLocation);

  const setMyLocation = useLocationStore((state) => state.setMyLocation);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMyLocation(new L.LatLng(latitude, longitude));
        },
        (error) => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 1000
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  if (myLocation) {
    return (
      <MapContainer
        center={myLocation}
        zoom={16}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{
          height: '90dvh'
        }}
        tap={false}>
        <TileLayer
          url={`${url}/req/wmts/1.0.0/${key}/Base/{z}/{y}/{x}.png`}
          attribution="&copy; <a href='https://vworld.kr'>VWorld</a> contributors"
        />
        <MyMarker />
        <MyLocationComponent />
      </MapContainer>
    );
  } else {
    return <div>loading</div>;
  }
};

export default MainMap;
