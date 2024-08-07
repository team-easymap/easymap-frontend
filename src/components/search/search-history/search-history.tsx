import { Button } from '@/components/ui/button';
import SearchHistoryList from './search-history-list';
import SearchHistoryEmpty from './history-empty';

const SearchHistory = () => {
  const list = [
    { id: 1, name: '땡땡하우스' },
    { id: 2, name: '땡땡하우스' },
    { id: 3, name: '땡땡하우스' }
  ];
  return (
    <>
      <section className='flex items-center justify-between p-2'>
        <h2 className='px-2 text-16M'>
          최근 검색어 · <span>{list.length}</span>개
        </h2>
        <Button variant='ghost' className='text-12R'>
          전체 삭제
        </Button>
      </section>
      {list.length ? <SearchHistoryList list={list} /> : <SearchHistoryEmpty />}
    </>
  );
};

export default SearchHistory;
