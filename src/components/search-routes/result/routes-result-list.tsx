import { CommonButton } from '@/components/common/commonButton';
import { convertTime } from '@/lib/utils';
import { searchRoutesResult } from '@/mocks/search-result';

type SearchRoutesResultListProps = {
  routesResult: typeof searchRoutesResult;
};

const SearchRoutesResultList = (props: SearchRoutesResultListProps) => {
  const { routesResult } = props;
  const selected = 'fastest';

  return (
    <div className='absolute bottom-0 left-0 right-0 z-[90000] flex flex-col gap-4 p-4'>
      <ul className='flex gap-2 overflow-x-auto'>
        {routesResult.map((routes) => (
          <li
            key={routes.type}
            className={`flex flex-col gap-0.5 rounded-lg border bg-white p-4`}
            aria-selected={selected === routes.type}>
            <span
              className={`text-12M ${selected === routes.type ? 'selected' : ''}`}>
              가장 빠른
            </span>
            <h2 className='text-black whitespace-nowrap text-20B'>
              {convertTime(routes.time_required)}
            </h2>
            <p className='mr-0.5 min-w-36 max-w-36 whitespace-nowrap text-14M text-gray-6'>{`${routes.distance}km · 최대 경사 ${routes.slope}`}</p>
          </li>
        ))}
      </ul>
      <CommonButton color='purple' className='w-full'>
        경로 선택
      </CommonButton>
    </div>
  );
};

export default SearchRoutesResultList;
