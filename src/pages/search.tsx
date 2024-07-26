import SearchComponent from '@/components/search/search-form/search';
import SearchHistory from '@/components/search/search-history/search-history';

const SearchPage = () => {
  return (
    <main className='h-full w-full'>
      <SearchComponent />
      <SearchHistory />
    </main>
  );
};

export default SearchPage;
