import { type POI } from '@/types/pois';
import SearchPOIResultInfo from './poi-info';

type SearchPOIResultProps = {
  data: POI;
};

const SearchPOIResult = (props: SearchPOIResultProps) => {
  const { data } = props;
  return (
    <div className='absolute bottom-0 z-[90000] w-full rounded-t-xl bg-red-400'>
      <SearchPOIResultInfo {...data} />
    </div>
  );
};

export default SearchPOIResult;
