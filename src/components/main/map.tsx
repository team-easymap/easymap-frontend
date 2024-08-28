import { MapContainer, TileLayer } from 'react-leaflet';
import * as L from 'leaflet';
import { useLocationStore } from '@/store/location';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import PoiMarker from './poiMarker';
import MapMarker from '../common/mapMarker';
import MapMoveHandler from './view-move';
import MapCornerHandler from './view-corner';
import MyLocationComponent from './location';
import PoiSave from './poi-save';
import { useGetViewPoi } from '@/queries/get-view-poi';

type MainMapProps = {
  handleMarkerClick: (marker: {
    lat: number;
    lng: number;
    poi_id: number;
  }) => void;
  mapRef: React.RefObject<L.Map>;
};
const MainMap = (props: MainMapProps) => {
  const { mapRef } = props;
  const key = import.meta.env.VITE_VWORLD_API_KEY;
  const url = import.meta.env.VITE_VWORLD_API_URL;

  const { myLocation, setMyLocation, lt, rb } = useLocationStore(
    (state) => state
  );

  const { data, error, isLoading } = useGetViewPoi([
    lt?.lat,
    lt?.lng,
    rb?.lat,
    rb?.lng
  ]);
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
        tap={false}
        ref={mapRef}>
        <TileLayer
          url={`${url}/req/wmts/1.0.0/${key}/Base/{z}/{y}/{x}.png`}
          attribution="&copy; <a href='https://vworld.kr'>VWorld</a> contributors"
          minZoom={13}
          maxZoom={20}
        />
        <PoiMarker />
        <MapCornerHandler />
        <MapMoveHandler />
        <MapMarker
          location={myLocation}
          name='myplace'
          className='rounded-full p-2 shadow-lg'
        />
        <MyLocationComponent />
        {/* 디자인에 따라 poi을 등록할 때 클릭하는 아이콘 추가 예정*/}
      </MapContainer>
    );
  } else {
    return <div>loading</div>;
  }
};

export default MainMap;
