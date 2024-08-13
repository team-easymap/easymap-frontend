import { CommonButton } from '@/components/common/commonButton';
import { convertTime } from '@/lib/utils';
import { searchRoutesResult } from '@/mocks/search-result';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SearchRoutesResultListProps = {
  routesResult: typeof searchRoutesResult;
};

const SearchRoutesResultList = (props: SearchRoutesResultListProps) => {
  const { routesResult } = props;
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState(routesResult[0]);

  return (
    <div className='absolute bottom-0 left-0 right-0 z-[90000] flex flex-col gap-4 p-4'>
      <ul className='flex gap-2 overflow-x-auto'>
        {routesResult.map((route) => (
          <li
            key={route.type}
            className={`flex cursor-pointer flex-col rounded-lg border bg-white p-4`}
            aria-selected={selectedRoute.type === route.type}
            onClick={() => setSelectedRoute(route)}>
            <span
              className={`text-12M ${selectedRoute.type === route.type ? 'selected' : ''}`}>
              가장 빠른
            </span>
            <h2 className='whitespace-nowrap text-20B text-black'>
              {convertTime(route.time_required)}
            </h2>
            <p className='mr-0.5 min-w-36 max-w-36 whitespace-nowrap text-14M text-gray-6'>{`${route.distance}km · 최대 경사 ${route.slope}`}</p>
          </li>
        ))}
      </ul>
      <CommonButton
        color='purple'
        className='w-full'
        onClick={() =>
          navigate(`/search/routes/${selectedRoute.type}`, {
            state: { route: selectedRoute }
          })
        }>
        경로 선택
      </CommonButton>
    </div>
  );
};

export default SearchRoutesResultList;
