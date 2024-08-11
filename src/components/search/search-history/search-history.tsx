import { Button } from '@/components/ui/button';
import SearchHistoryList from './search-history-list';
import SearchHistoryEmpty from './history-empty';
import { useState } from 'react';
import { useLocalStorage } from '@/hooks/common/useLocalStorage';

const SearchHistory = () => {
  const list = JSON.parse(localStorage.getItem('search-locate') || '[]');
  const [historyList, setHistoryList] = useState(list);
  const { editStorage } =
    useLocalStorage<(typeof list)['number']>('search-locate');

  const handleValueDelete = (id?: number) => {
    if (!id) {
      editStorage();
      setHistoryList([]);
    } else {
      setHistoryList((prev: (typeof list)['number']) => prev.id !== id);
      editStorage('id', id);
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

export default SearchHistory;
