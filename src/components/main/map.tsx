import { MapContainer, TileLayer } from 'react-leaflet';
import * as L from 'leaflet';
import { useLocationStore } from '@/store/location';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import PoiMarker from './poiMarker';
import MapMarker from '../common/mapMarker';
import { useState } from 'react';
import MapMoveHandler from './view-move';
import MapCornerHandler from './view-corner';
import MyLocationComponent from './location';
const MainMap = () => {
  const key = import.meta.env.VITE_VWORLD_API_KEY;
  const url = import.meta.env.VITE_VWORLD_API_URL;

  const myLocation = useLocationStore((state) => state.myLocation);

  const setMyLocation = useLocationStore((state) => state.setMyLocation);

  const [moveFlag, setMoveFlag] = useState<boolean>(false);

  const [northWest, setNorthWest] = useState<L.LatLng | undefined>(); //좌상단
  const [southEast, setSouthEast] = useState<L.LatLng | undefined>(); //우하단

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(position);
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
      alert('현 위치 받아오기 에러 ');
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
          minZoom={13}
          maxNativeZoom={16}
          maxZoom={20}
        />
        <PoiMarker />
        <MapCornerHandler
          moveFlag={moveFlag}
          setMoveFlag={setMoveFlag}
          setNorthWest={setNorthWest}
          setSouthEast={setSouthEast}
        />
        <MapMoveHandler setMoveFlag={setMoveFlag} />
        <MapMarker
          location={myLocation}
          name='myplace'
          className='rounded-full p-2 shadow-lg'
        />
        <MyLocationComponent />
      </MapContainer>
    );
  } else {
    return <div>loading</div>;
  }
};

export default MainMap;
