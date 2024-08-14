import type { SearchResult, POI } from '@/types/pois';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';
import POIInfo from '../poi/poi-description';
import POIAlly from '../poi/poi-ally';
import POIImages from '../poi/poi-images';
import POIButtons from '../poi/poi-buttons';

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
            <POIInfo {...data} />
            <POIAlly tags={data.tags_on_poi} />
            <POIImages images={data.imgs_on_poi} />
          </div>
          <POIButtons data={data} />
        </>
      ) : (
        <section>
          <h2 className='px-4 pb-8 pt-6 text-18M'>
            {data.name || data.address}
          </h2>
          <Separator />
          <POIButtons data={data} />
        </section>
      )}
    </div>
  );
};

export default SearchPOIResult;
