import SearchPOIResult from '@/components/search-poi-result/poi/search-poi-result';
import SearchPOIResultHeader from '@/components/search-poi-result/result-header';
import SearchPOIResultMap from '@/components/search-poi-result/result-map';
import { mockPOI } from '@/mocks/poi';

const SearchPOIResultPage = () => {
  const { lat, lng } = mockPOI;
  return (
    <>
      <SearchPOIResultHeader />
      <main className='relative flex h-[calc(100dvh-58px)] flex-col'>
        <SearchPOIResultMap center={[lat, lng]} />
        <SearchPOIResult data={mockPOI} />
      </main>
    </>
  );
};

export default SearchPOIResultPage;
