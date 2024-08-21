import SearchPOIResult from '@/components/search-poi-result/search-poi-result';
import SearchPOIResultHeader from '@/components/search-poi-result/result-header';
import SearchPOIResultMap from '@/components/search-poi-result/result-map';
import { mockPOI } from '@/mocks/poi';
import { useLocation } from 'react-router-dom';
import { useSelectMap } from '@/hooks/useSelectMap';
import SelectLocation from '@/components/common/select-location';

const SearchPOIResultPage = () => {
  let { lat, lng } = mockPOI;
  const { state } = useLocation();
  if (state?.poi) {
    lat = state.poi.lat;
    lng = state.poi.lng;
  }
  const { mapRef, buttonRef } = useSelectMap();

  return (
    <>
      <SearchPOIResultHeader state={state?.selected} />
      <main className='relative flex h-[calc(100dvh-58px)] flex-col'>
        <SelectLocation ref={buttonRef} className='top-4' />
        <SearchPOIResultMap center={[lat, lng]} ref={mapRef} />
        <SearchPOIResult data={state ? state.poi : mockPOI} />
      </main>
    </>
  );
};

export default SearchPOIResultPage;
