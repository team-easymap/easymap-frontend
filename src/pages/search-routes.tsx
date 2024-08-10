import SearchRoutesResult from '@/components/search-routes/routes-result';
import SearchRoutes from '@/components/search-routes/form/search-routes';
import { useMemo, useState } from 'react';

export type SearchRoutesValueType = {
  start?: { id: number; name: string };
  end?: { id: number; name: string };
};

const SearchRoutesPage = () => {
  const myLocation = '서울시 땡땡구 땡땡동';
  const initValue = {
    start: { id: 0, name: `내 위치: ${myLocation}` }
  };
  const routesValue = useMemo(
    () => JSON.parse(localStorage.getItem('routes-value') || '0'),
    []
  );
  const [searchRoutesValue, setSearchRoutesValue] =
    useState<SearchRoutesValueType>(routesValue || initValue);

  return (
    <main className='flex flex-col'>
      <SearchRoutes
        searchRoutesValue={searchRoutesValue}
        handleSearchRoutesValue={(value: SearchRoutesValueType) => {
          const checkValue = value.start ? value : initValue;
          setSearchRoutesValue(checkValue);
          localStorage.setItem('routes-value', JSON.stringify(checkValue));
        }}
      />
      {searchRoutesValue.start && searchRoutesValue.end ? (
        <SearchRoutesResult searchRoutesValue={searchRoutesValue} />
      ) : (
        <></>
      )}
    </main>
  );
};

export default SearchRoutesPage;
