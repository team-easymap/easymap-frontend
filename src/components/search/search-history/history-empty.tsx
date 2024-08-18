import SearchSVG from '@/assets/search-lg.svg?react';

const SearchHistoryEmpty = () => {
  return (
    <section className='flex flex-col items-center h-full gap-4 py-4 text-gray-6'>
      <SearchSVG />
      <p className='text-18M'>최근 검색어가 없어요!</p>
    </section>
  );
};

export default SearchHistoryEmpty;
