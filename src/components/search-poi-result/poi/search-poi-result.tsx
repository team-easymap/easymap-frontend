import { SearchResult, type POI } from '@/types/pois';
import SearchPOIResultButtons from './poi-buttons';
import SearchPOIResultImages from './poi-images';
import SearchPOIResultInfo from './poi-info';
import SearchPOIResultTags from './poi-tags';
import { Separator } from '@/components/ui/separator';

type SearchPOIResultProps = {
  data: POI & SearchResult & { name: string };
};

const SearchPOIResult = (props: SearchPOIResultProps) => {
  const { data } = props;
  console.log(data);
  return (
    <div className='absolute bottom-0 z-[90000] w-full rounded-t-xl bg-white'>
      {data.poi_id ? (
        <>
          <SearchPOIResultInfo {...data} />
          <SearchPOIResultTags tags={data.tags_on_poi} />
          <SearchPOIResultImages images={data.imgs_on_poi} />
          <SearchPOIResultButtons isPOI={true} />
        </>
      ) : (
        <section>
          <h2 className='px-4 pt-6 pb-8 text-18M'>{data.name}</h2>
          <Separator />
          <SearchPOIResultButtons isPOI={false} />
        </section>
      )}
    </div>
  );
};

export default SearchPOIResult;
