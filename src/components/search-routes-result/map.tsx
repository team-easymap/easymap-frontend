import { SearchRoutesResult } from '@/types/pois';
import { Map } from 'leaflet';
import { forwardRef } from 'react';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import { useLocation } from 'react-router-dom';

const SearchRoutesResultMap = forwardRef<Map>((_props, ref) => {
  const key = import.meta.env.VITE_VWORLD_API_KEY;
  const url = import.meta.env.VITE_VWORLD_API_URL;
  const { state } = useLocation();

  if (!state) {
    return <>Error</>;
  }

  const route: SearchRoutesResult[number] = state.route;
  const center = route.list[Math.floor(route.list.length / 2)];

  return (
    <MapContainer
      center={center}
      zoom={15}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{ height: '100dvh' }}
      tap={false}
      ref={ref}>
      <TileLayer
        url={`${url}/req/wmts/1.0.0/${key}/Base/{z}/{y}/{x}.png`}
        attribution="&copy; <a href='https://vworld.kr'>VWorld</a> contributors"
      />
      <Polyline positions={route.list} />
    </MapContainer>
  );
});

export default SearchRoutesResultMap;
