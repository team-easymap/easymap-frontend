import { Button } from '@/components/ui/button';
import SearchHistoryList from './search-history-list';
import SearchHistoryEmpty from './history-empty';

const SearchHistory = () => {
  const list = [];
  return (
    <>
      <section className='flex items-center justify-between p-2'>
        <h2 className='px-2 text-xs'>최근 검색어</h2>
        <Button variant='ghost' className='text-xs'>
          전체 삭제
        </Button>
      </section>
      {list.length ? <SearchHistoryList /> : <SearchHistoryEmpty />}
    </>
  );
};

export default SearchHistory;
