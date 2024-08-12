import { MapContainer, TileLayer } from 'react-leaflet';
import * as L from 'leaflet';
import { useLocationStore } from '@/store/location';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import PoiMarker from './poiMarker';
import MapMarker from '../common/mapMarker';
import RecordRoutes from './record';
const MainMap = () => {
  const key = import.meta.env.VITE_VWORLD_API_KEY;
  const url = import.meta.env.VITE_VWORLD_API_URL;
  const [rotation, setRotation] = useState(0); // 회전 각도를 상태로 관리

  const myLocation = useLocationStore((state) => state.myLocation);

  const setMyLocation = useLocationStore((state) => state.setMyLocation);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 45) % 360); // 5초마다 45도씩 회전
    }, 1000); // 5000ms = 5초

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 클리어
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
        <MapMarker
          location={myLocation}
          name='myplace'
          className='rounded-full p-2 shadow-lg'
          rotation={rotation} // SVG 회전 각도 (45도 회전)
        />
        <RecordRoutes />
      </MapContainer>
    );
  } else {
    return <div>loading</div>;
  }
};

export default MainMap;
