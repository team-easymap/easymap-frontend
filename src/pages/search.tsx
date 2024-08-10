import SearchComponent from '@/components/search/search-form/search';
import SearchHistory from '@/components/search/search-history/search-history';
import SearchResultList from '@/components/search/search-result/result-list';
import SearchRoutes from '@/components/search/search-routes/search-routes';
import { Separator } from '@/components/ui/separator';
import { useDebounce } from '@/hooks/common/useDebounce';
import { getRandomSearchResult } from '@/mocks/search-result';
import { SearchResult } from '@/types/pois';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type SearchRoutesValueType = {
  start?: { id: number; name: string };
  end?: { id: number; name: string };
};

const SearchPage = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue);
  const myLocation = '서울시 땡땡구 땡땡동';
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
  const [searchRoutesValue, setSearchRoutesValue] =
    useState<SearchRoutesValueType>({
      start: { id: 0, name: `내 위치: ${myLocation}` }
    });
  useEffect(() => {
    setSearchResult(getRandomSearchResult());
  }, [debouncedValue]);

  useEffect(() => {
    if (location.state) {
      setSearchRoutesValue((prev) => ({ ...prev, ...location.state }));
    }
  }, [location.state]);

  return (
    <main className='flex flex-col w-full h-full bg-white'>
      {location.pathname === '/search/poi' ? (
        <SearchComponent
          searchValue={searchValue}
          handleValueChange={(value: string) => setSearchValue(value)}
        />
      ) : (
        <SearchRoutes
          handleRoutesValue={(v: SearchRoutesValueType) =>
            setSearchRoutesValue(v)
          }
          value={searchRoutesValue}
        />
      )}
      <Separator className='h-2 bg-gray-1' />
      {debouncedValue.length ? (
        <SearchResultList
          list={searchResult}
          searchType={location.state?.type}
        />
      ) : (
        <SearchHistory />
      )}
    </main>
  );
};

export default SearchPage;
