import { forwardRef } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

type SearchPOIResultMapProps = {
  center: [L.LatLng['lat'], L.LatLng['lng']];
};

const SearchPOIResultMap = forwardRef<L.Map, SearchPOIResultMapProps>(
  (props, ref) => {
    const { center } = props;
    const key = import.meta.env.VITE_VWORLD_API_KEY;
    const url = import.meta.env.VITE_VWORLD_API_URL;
    return (
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: '72dvh' }}
        tap={false}
        ref={ref}>
        <TileLayer
          url={`${url}/req/wmts/1.0.0/${key}/Base/{z}/{y}/{x}.png`}
          attribution="&copy; <a href='https://vworld.kr'>VWorld</a> contributors"
        />
        <Marker position={center} />
      </MapContainer>
    );
  }
);

export default SearchPOIResultMap;
