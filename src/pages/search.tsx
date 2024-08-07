import SearchComponent from '@/components/search/search-form/search';
import SearchHistory from '@/components/search/search-history/search-history';
import SearchRoutes from '@/components/search/search-routes/search-routes';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();

  return (
    <main className='h-full w-full bg-white'>
      {location.pathname === '/search/location' ? (
        <SearchComponent />
      ) : (
        <SearchRoutes />
      )}
      <SearchHistory />
    </main>
  );
};

export default SearchPage;
