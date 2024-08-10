import { Button } from '@/components/ui/button';
import SearchHistoryList from './search-history-list';
import SearchHistoryEmpty from './history-empty';
import { useState } from 'react';

const SearchHistory = () => {
  const list = JSON.parse(localStorage.getItem('search-locate') || '[]');
  const [historyList, setHistoryList] = useState(list);

  const handleValueDelete = (id?: number, name?: string) => {
    if (!id) {
      localStorage.setItem('search-locate', JSON.stringify([]));
      setHistoryList([]);
    } else {
      const filtered = list.filter(
        (item: (typeof list)[number]) => item.id !== id
      );
      if (list.length !== historyList.length) {
        filtered.push({ id, name });
      }
      localStorage.setItem('search-locate', JSON.stringify(filtered));
      setHistoryList(filtered);
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
