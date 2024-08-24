import EmptyListComponent from '@/components/common/empty-list';
import { Separator } from '@/components/ui/separator';
import { useCoords } from '@/hooks/queries/useCoords';
import { SearchLocateValueType } from '@/pages/search';
import { SearchResult } from '@/types/pois';
import { useEffect, useState } from 'react';
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
  const [address, setAddress] = useState('');
  const coords = useCoords(address);

  const handlePOIClick = async (poi: (typeof list)[number]) => {
    if (!poi.poi_id && poi.address) {
      setAddress(poi.address);
    } else {
      const poiItem = { id: poi.poi_id!, name: poi.poi_name! };
      updateSearchHistory('id', poiItem);
      searchType === 'poi'
        ? navigate(`/search/poi/${poiItem.id}`)
        : navigate(`/serach/routes`, {
            state: {
              [searchType]: poiItem
            }
          });
    }
  };

  useEffect(() => {
    if (coords) {
      const poiItem = {
        id: `lat?${coords.lat}&lng?${coords.lng}`,
        name: address,
        lat: coords.lat,
        lng: coords.lng
      };
      updateSearchHistory('id', poiItem);
      searchType === 'poi'
        ? navigate(`/search/poi/${poiItem.id}`, {
            state: { poi: poiItem }
          })
        : navigate(`search/routes`, { state: { [searchType]: poiItem } });
    }
  }, [address, coords, navigate, searchType]);

  return (
    <>
      {list.length ? (
        <ul className='scroll-hidden overflow-y-auto'>
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
