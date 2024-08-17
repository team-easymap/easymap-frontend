import POIRatingComponent from '@/components/common/rating';
import ChipComponent from '@/components/ui/chip';
import { SearchResult, type POI } from '@/types/pois';

type POIInfoProps = POI & SearchResult;

const POIInfo = (props: POIInfoProps) => {
  const {
    poi_name,
    poi_address,
    poi_point_avg,
    poi_point_count,
    poi_point_ally
  } = props;
  return (
    <div className='p-4 pb-2'>
      <section className='relative mb-2 flex flex-col gap-2'>
        <h2 className='text-18M'>{poi_name}</h2>
        <p className='text-14M'>{poi_address}</p>
        <ChipComponent className='absolute right-0 top-0'>~Text~</ChipComponent>
      </section>
      <POIRatingComponent
        score={poi_point_ally}
        rating={poi_point_avg}
        count={poi_point_count}
      />
    </div>
  );
};

export default POIInfo;
