import SearchComponent from '@/components/search/search-form/search';
import SearchHistory from '@/components/search/search-history/search-history';
import SearchResultList from '@/components/search/search-result/result-list';
import { Separator } from '@/components/ui/separator';
import { useDebounce } from '@/hooks/common/useDebounce';
import { getRandomSearchResult } from '@/mocks/search-result';
import { SearchResult } from '@/types/pois';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue);
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  useEffect(() => {
    setSearchResult(getRandomSearchResult());
  }, [debouncedValue]);

  return (
    <main className='flex flex-col w-full h-full bg-white'>
      <SearchComponent
        searchValue={searchValue}
        handleValueChange={(value: string) => setSearchValue(value)}
      />
      <Separator className='h-2 bg-gray-1' />
      {debouncedValue.length ? (
        <SearchResultList
          list={searchResult}
          searchType={location.state.type}
        />
      ) : (
        <SearchHistory searchType={location.state.type} />
      )}
    </main>
  );
};

export default SearchPage;
