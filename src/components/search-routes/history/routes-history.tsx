import { Button } from '@/components/ui/button';
import IconComponent from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { SearchRoutesValueType } from '@/pages/search-routes';
import * as React from 'react';
import { useState } from 'react';

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
      <ul className='overflow-y-auto'>
        {historyList.map((history) => (
          <React.Fragment key={history.storageKey}>
            <li
              className='flex items-center justify-between gap-3 px-4 py-2 cursor-pointer'
              onClick={() =>
                handleRouteSelect({ start: history.start, end: history.end })
              }>
              <IconComponent name='mapPin' color='text-gray-6' />
              <p className='flex flex-wrap items-center flex-1 gap-x-3 gap-y-1 whitespace-nowrap text-14M'>
                {history.start?.name}
                <IconComponent name='arrowRight' color='text-gray-6' />
                {history.end?.name}
              </p>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => handleDeleteRoute(history.storageKey)}>
                <IconComponent name='close' />
              </Button>
            </li>
            <Separator className='bg-gray-3' />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default SearchRoutesHistory;
