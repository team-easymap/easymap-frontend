import EmptyListComponent from '@/components/common/empty-list';
import { Separator } from '@/components/ui/separator';
import { SearchLocateValueType } from '@/pages/search';
import { SearchResult } from '@/types/pois';
import { useNavigate } from 'react-router-dom';

type SearchResultListProps = {
  list: SearchResult[];
  searchType: 'poi' | 'start' | 'end';
  updateSearchHistory: (
    itemKey: keyof SearchLocateValueType,
    item: SearchLocateValueType
  ) => void;
};

const SearchResultList = (props: SearchResultListProps) => {
  const { list, searchType, updateSearchHistory } = props;
  const navigate = useNavigate();

  const handlePOIClick = (poi: (typeof list)[number]) => {
    if (poi.poi_id) {
      const searchValue = {
        id: poi.poi_id,
        name: poi.poi_name!
      };
      updateSearchHistory('id', searchValue);
      searchType === 'poi'
        ? navigate(`/search/poi/${poi.poi_id}`)
        : navigate('/search/routes', {
            state: {
              [searchType]: { id: poi.poi_id, name: poi.poi_name }
            }
          });
    }
  };

  return (
    <>
      {list.length ? (
        <ul>
          {list.map((result, idx) => (
            <li
              key={idx}
              className='cursor-pointer'
              onClick={() => handlePOIClick(result)}>
              <section className='flex flex-col gap-1 p-4'>
                <h2 className='text-16R'>
                  {result.poi_name ?? result.address}
                </h2>
                <p className='text-gray-6'>
                  {result.poi_address ?? result.address}
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
