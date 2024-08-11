import SearchPOIResultHeader from '@/components/search-poi-result/result-header';
import SearchPOIResultMap from '@/components/search-poi-result/result-map';
import { mockPOI } from '@/mocks/poi';

const SearchPOIResultPage = () => {
  const { lat, lng } = mockPOI;
  return (
    <>
      <SearchPOIResultHeader />
      <main className='relative flex flex-col'>
        <SearchPOIResultMap center={[lat, lng]} />
      </main>
    </>
  );
};

export default SearchPOIResultPage;
