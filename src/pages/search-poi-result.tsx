import SearchPOIResult from '@/components/search-poi-result/search-poi-result';
import SearchPOIResultHeader from '@/components/search-poi-result/result-header';
import SearchPOIResultMap from '@/components/search-poi-result/result-map';
import { useLocation, useParams } from 'react-router-dom';
import { useSelectMap } from '@/hooks/useSelectMap';
import SelectLocation from '@/components/common/select-location';
import { useGetPOI } from '@/hooks/queries/useGetPOI';

const SearchPOIResultPage = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const isPOI = !state?.poi;
  const data = useGetPOI(Number(id), isPOI);
  let [lat, lng] = [data?.poi_latitude, data?.poi_longitude];
  if (state?.poi) {
    lat = state.poi.lat;
    lng = state.poi.lng;
  }
  const { mapRef, buttonRef } = useSelectMap();

  return (
    <>
      <SearchPOIResultHeader state={state?.selected} />
      {(state?.poi || data) && (
        <main className='relative flex h-[calc(100dvh-58px)] flex-col'>
          <SelectLocation ref={buttonRef} className='top-4' />
          <SearchPOIResultMap center={[lat!, lng!]} ref={mapRef} />
          <SearchPOIResult data={state?.poi ? state.poi : data} />
        </main>
      )}
    </>
  );
};

export default SearchPOIResultPage;
