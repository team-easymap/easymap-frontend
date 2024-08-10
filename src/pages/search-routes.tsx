import SearchRoutes from '@/components/search/search-routes/search-routes';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type SearchRoutesValueType = {
  start?: { id: number; name: string };
  end?: { id: number; name: string };
};

const SearchRoutesPage = () => {
  const myLocation = '서울시 땡땡구 땡땡동';
  const location = useLocation();
  const initValue = useMemo(
    () => JSON.parse(localStorage.getItem('routes-value') || '0'),
    []
  );
  const [searchRoutesValue, setSearchRoutesValue] =
    useState<SearchRoutesValueType>(
      initValue || {
        start: { id: 0, name: `내 위치: ${myLocation}` }
      }
    );

  useEffect(() => {
    if (location.state) {
      setSearchRoutesValue((prev) => ({ ...prev, ...location.state }));
      localStorage.setItem(
        'routes-value',
        JSON.stringify({ ...initValue, ...location.state })
      );
    }
  }, [location.state, initValue]);

  return (
    <main>
      <SearchRoutes
        handleRoutesValue={(v: SearchRoutesValueType) => {
          setSearchRoutesValue(v);
          localStorage.setItem('routes-value', JSON.stringify(v));
        }}
        value={searchRoutesValue}
        myLocation={myLocation}
      />
    </main>
  );
};

export default SearchRoutesPage;
