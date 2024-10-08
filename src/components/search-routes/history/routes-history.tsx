import { Button } from '@/components/ui/button';
import IconComponent from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { SearchRoutesValueType } from '@/pages/search-routes';
import * as React from 'react';
import { useState } from 'react';
import SearchSVG from '@/assets/search-lg.svg?react';

type SearchRoutesHistoryProps = {
  editSearchHistory: (key?: 'storageKey', value?: string) => void;
  handleRouteSelect: (route: SearchRoutesValueType) => void;
};

const SearchRoutesHistory = (props: SearchRoutesHistoryProps) => {
  const { editSearchHistory, handleRouteSelect } = props;
  const init = JSON.parse(localStorage.getItem('search-routes') || '[]');
  const [historyList, setHistoryList] =
    useState<({ storageKey: string } & SearchRoutesValueType)[]>(init);

  const handleDeleteRoute = (key?: string) => {
    if (key) {
      setHistoryList((prev) =>
        prev.filter((route) => route.storageKey !== key)
      );
      editSearchHistory('storageKey', key);
    } else {
      setHistoryList([]);
      editSearchHistory();
    }
  };

  return (
    <>
      <section className='p-4'>
        <h2 className='flex gap-1 text-16M'>
          최근 검색 경로<span>·</span>
          {historyList.length}개
        </h2>
      </section>
      {historyList.length ? (
        <ul className='overflow-y-auto'>
          {[...historyList].reverse().map((history) => (
            <React.Fragment key={history.storageKey}>
              <li
                className='flex cursor-pointer items-center justify-between gap-3 px-4 py-2'
                onClick={() =>
                  handleRouteSelect({ start: history.start, end: history.end })
                }>
                <IconComponent name='mapPin' color='text-gray-6' />
                <p className='flex flex-1 flex-wrap items-center gap-x-3 gap-y-1 whitespace-nowrap text-14M'>
                  {history.start?.name}
                  <IconComponent name='arrowRight' color='text-gray-6' />
                  {history.end?.name}
                </p>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteRoute(history.storageKey);
                  }}>
                  <IconComponent name='close' />
                </Button>
              </li>
              <Separator className='bg-gray-3' />
            </React.Fragment>
          ))}
        </ul>
      ) : (
        <section className='flex h-full flex-col items-center gap-4 py-4 text-gray-6'>
          <SearchSVG />
          <p className='text-18M'>최근 검색 경로가 없어요!</p>
        </section>
      )}
    </>
  );
};

export default SearchRoutesHistory;
