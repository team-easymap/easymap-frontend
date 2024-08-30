import { useLocationStore } from '@/store/location';
import { Marker } from 'react-leaflet';
import * as L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

type POIMarkerProps = {
  handleMarkerClick: (marker: {
    latlng: L.LatLngLiteral;
    poi_id: number;
  }) => void;
};

const PoiMarker = (props: POIMarkerProps) => {
  const { handleMarkerClick } = props;
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
          icon={defaultIcon}
          eventHandlers={{
            click: (e) =>
              handleMarkerClick({ latlng: e.latlng, poi_id: poi.poi_id })
          }}></Marker>
      ))}
    </>
  );
};

export default PoiMarker;
