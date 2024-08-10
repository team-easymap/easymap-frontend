import { searchRoutesResult } from '@/mocks/search-result';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';

type SearchRoutesResultMapProps = {
  routesResult: typeof searchRoutesResult;
};
const SearchRoutesResultMap = (props: SearchRoutesResultMapProps) => {
  const { routesResult } = props;
  const key = import.meta.env.VITE_VWORLD_API_KEY;
  const url = import.meta.env.VITE_VWORLD_API_URL;
  const center = [routesResult[0].list[0].lat, routesResult[0].list[0].lng];

  return (
    <MapContainer
      center={center}
      zoom={15}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{ height: 'calc(100dvh - 10.3em)' }}
      tap={false}>
      <TileLayer
        url={`${url}/req/wmts/1.0.0/${key}/Base/{z}/{y}/{x}.png`}
        attribution="&copy; <a href='https://vworld.kr'>VWorld</a> contributors"
      />

      <Polyline positions={routesResult[0].list} />
    </MapContainer>
  );
};

export default SearchRoutesResultMap;
