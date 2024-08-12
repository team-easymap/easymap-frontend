import { Button } from '@/components/ui/button';
import SearchHistoryList from './search-history-list';
import SearchHistoryEmpty from './history-empty';
import { SearchLocateValueType } from '@/pages/search';
import { useState } from 'react';

type SearchLocateHistoryProps = {
  searchType: 'poi' | 'start' | 'end';
  editSearchHistory: (
    itemKey?: keyof SearchLocateValueType,
    itemValue?: SearchLocateValueType[keyof SearchLocateValueType]
  ) => void;
};

const SearchLocateHistory = (props: SearchLocateHistoryProps) => {
  const { editSearchHistory } = props;
  const list = JSON.parse(localStorage.getItem('search-locate') || '[]');
  const [historyList, setHistoryList] = useState<SearchLocateValueType[]>(list);

  const handleValueDelete = (id?: number) => {
    if (id) {
      setHistoryList((prev) => prev.filter((i) => i.id !== id));
      editSearchHistory('id', id);
    } else {
      setHistoryList([]);
      editSearchHistory();
    }
  };
  return (
    <>
      <section className='flex items-center justify-between p-2'>
        <h2 className='px-2 text-16M'>
          최근 검색어 · <span>{historyList.length}</span>개
        </h2>
        <Button
          variant='ghost'
          className='text-12R'
          onClick={() => handleValueDelete()}>
          전체 삭제
        </Button>
      </section>
      {historyList.length ? (
        <SearchHistoryList
          list={historyList}
          handleValueDelete={handleValueDelete}
        />
      ) : (
        <SearchHistoryEmpty />
      )}
    </>
  );
};

export default SearchLocateHistory;
