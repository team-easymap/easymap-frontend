import MapMarker from '../common/mapMarker';

import { searchResult } from '@/mocks/search-result';
const PoiMarker = () => {
  return (
    <>
      {searchResult.map((poi) => (
        <MapMarker
          key={poi.poi_id}
          name='mappin'
          location={{ lat: poi.lat, lng: poi.lng }}
        />
      ))}
    </>
  );
};

export default PoiMarker;
