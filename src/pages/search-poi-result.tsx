import SearchPOIResult from '@/components/search-poi-result/poi/search-poi-result';
import SearchPOIResultHeader from '@/components/search-poi-result/result-header';
import SearchPOIResultMap from '@/components/search-poi-result/result-map';
import { mockPOI } from '@/mocks/poi';
import { useLocation } from 'react-router-dom';

const SearchPOIResultPage = () => {
  let { lat, lng } = mockPOI;
  const { state } = useLocation();
  if (state?.poi) {
    lat = state.poi.lat;
    lng = state.poi.lng;
  }

  return (
    <>
      <SearchPOIResultHeader />
      <main className='relative flex h-[calc(100dvh-58px)] flex-col'>
        <SearchPOIResultMap center={[lat, lng]} />
        <SearchPOIResult data={state ? state.poi : mockPOI} />
      </main>
    </>
  );
};

export default SearchPOIResultPage;
