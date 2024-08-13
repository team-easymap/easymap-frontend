import { type POI } from '@/types/pois';
import SearchPOIResultButtons from './poi-buttons';
import SearchPOIResultImages from './poi-images';
import SearchPOIResultInfo from './poi-info';
import SearchPOIResultTags from './poi-tags';

type SearchPOIResultProps = {
  data: POI;
};

const SearchPOIResult = (props: SearchPOIResultProps) => {
  const { data } = props;
  return (
    <div className='absolute bottom-0 z-[90000] w-full rounded-t-xl bg-white'>
      {data.poi_id ? (
        <>
          <SearchPOIResultInfo {...data} />
          <SearchPOIResultTags tags={data.tags_on_poi} />
          <SearchPOIResultImages images={data.imgs_on_poi} />
          <SearchPOIResultButtons />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchPOIResult;
