import EmptyListComponent from '@/components/common/empty-list';
import { Separator } from '@/components/ui/separator';
import { SearchResult } from '@/types/pois';

type SearchResultListProps = {
  list: SearchResult[];
};

const SearchResultList = (props: SearchResultListProps) => {
  const { list } = props;
  return (
    <>
      {list.length ? (
        <ul>
          {list.map((result, idx) => (
            <li key={idx}>
              <section className='flex flex-col gap-1 p-4'>
                <h2 className='text-16R'>
                  {result.address || result.poi_name}
                </h2>
                <p className='text-gray-6'>
                  {result.address || result.poi_address}
                </p>
              </section>
              <Separator className='bg-gray-3' />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyListComponent
          message={
            <>
              검색 결과와 일치하는 장소가 없어요 ! <br />
              직접 장소를 입력해볼까요 ?
            </>
          }
          action='장소 등록하기'
          onClick={() => {}}
        />
      )}
    </>
  );
};

export default SearchResultList;
