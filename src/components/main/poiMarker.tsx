import { useLocationStore } from '@/store/location';
import { Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const PoiMarker = () => {
  const { view_poi } = useLocationStore((state) => state);
  const defaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });
  return (
    <>
      {view_poi.map((poi) => (
        <Marker
          key={poi.poi_id}
          position={{ lat: poi.lat, lng: poi.lng }}
          icon={defaultIcon}>
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
