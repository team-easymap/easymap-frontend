import SearchComponent from '@/components/search/search-form/search';
import SearchHistory from '@/components/search/search-history/search-history';
import SearchResultList from '@/components/search/search-result/result-list';
import { Separator } from '@/components/ui/separator';
import { useDebounce } from '@/hooks/common/useDebounce';
import { useLocalStorage } from '@/hooks/common/useLocalStorage';
import { useSearchList } from '@/hooks/queries/useSearchList';
import { SearchResult } from '@/types/pois';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type SearchLocateValueType = {
  id: number | string;
  name: string;
  lat?: number;
  lng?: number;
};

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue);
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
  const data = useSearchList(debouncedValue);
  const { updateStorage, editStorage } =
    useLocalStorage<SearchLocateValueType>('search-locate');

  useEffect(() => {
    if (debouncedValue) {
      setSearchResult(data);
    }
  }, [debouncedValue, data]);

  const handleValueSelect = (item: SearchLocateValueType) => {
    const searchValue = {
      id: item.id,
      name: item.name!,
      lat: item.lat,
      lng: item.lng
    };

    updateStorage('id', searchValue);
    const searchType = location.state.type;
    searchType === 'poi'
      ? navigate(`/search/poi/${item.id}`, {
          state: item.lat ? { poi: item } : null
        })
      : navigate('/search/routes', {
          state: {
            [searchType]: { ...searchValue }
          }
        });
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
