import SearchComponent from '@/components/search/search-form/search';
import SearchHistory from '@/components/search/search-history/search-history';
import SearchResultList from '@/components/search/search-result/result-list';
import { Separator } from '@/components/ui/separator';
import { useDebounce } from '@/hooks/common/useDebounce';
import { useLocalStorage } from '@/hooks/common/useLocalStorage';
import { getRandomSearchResult } from '@/mocks/search-result';
import { SearchResult } from '@/types/pois';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type SearchLocateValueType = {
  id: number;
  name: string;
};

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue);
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
  const { updateStorage, editStorage } =
    useLocalStorage<SearchLocateValueType>('search-locate');

  useEffect(() => {
    setSearchResult(getRandomSearchResult());
  }, [debouncedValue]);

  const handleValueSelect = (item: SearchLocateValueType) => {
    if (item.id) {
      const searchValue = {
        id: item.id,
        name: item.name!
      };
      updateStorage('id', searchValue);
      const searchType = location.state.type;
      searchType === 'poi'
        ? navigate(`/search/poi/${item.id}`)
        : navigate('/search/routes', {
            state: {
              [searchType]: { id: item.id, name: item.name }
            }
          });
    }
  };

  return (
    <main className='flex h-full w-full flex-col bg-white'>
      <SearchComponent
        searchValue={searchValue}
        handleValueChange={(value: string) => setSearchValue(value)}
      />
      <Separator className='h-2 bg-gray-1' />
      {debouncedValue.length ? (
        <SearchResultList
          list={searchResult}
          searchType={location.state.type}
          updateSearchHistory={updateStorage}
        />
      ) : (
        <SearchHistory
          searchType={location.state.type}
          editSearchHistory={editStorage}
          handleValueSelect={handleValueSelect}
        />
      )}
    </main>
  );
};

export default SearchPage;
