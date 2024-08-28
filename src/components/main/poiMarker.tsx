import { useLocationStore } from '@/store/location';
import { Marker, Popup } from 'react-leaflet';

const PoiMarker = () => {
  const { view_poi } = useLocationStore((state) => state);
  return (
    <>
      {view_poi.map((poi) => (
        <Marker key={poi.poi_id} position={{ lat: poi.lat, lng: poi.lng }}>
          <Popup>
            <span>장소 이름 : {poi.poi_name}</span>
            <br />
            <span>장소 타입 : {poi.type}</span>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default PoiMarker;
