import type { SearchResult, POI } from '@/types/pois';
import SearchPOIResultButtons from './poi-buttons';
import SearchPOIResultImages from './poi-images';
import SearchPOIResultInfo from './poi-info';
import SearchPOIResultTags from './poi-tags';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';

type SearchPOIResultProps = {
  data: POI & SearchResult & { name: string };
};

const SearchPOIResult = (props: SearchPOIResultProps) => {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <div className='absolute bottom-0 z-[90000] w-full rounded-t-xl bg-white'>
      {data.poi_id ? (
        <>
          <div onClick={() => navigate(`/pois/${data.poi_id}`)}>
            <SearchPOIResultInfo {...data} />
            <SearchPOIResultTags tags={data.tags_on_poi} />
            <SearchPOIResultImages images={data.imgs_on_poi} />
          </div>
          <SearchPOIResultButtons data={data} />
        </>
      ) : (
        <section>
          <h2 className='px-4 pb-8 pt-6 text-18M'>
            {data.name || data.address}
          </h2>
          <Separator />
          <SearchPOIResultButtons data={data} />
        </section>
      )}
    </div>
  );
};

export default SearchPOIResult;
