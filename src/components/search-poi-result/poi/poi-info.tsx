import POIRatingComponent from '@/components/common/rating';
import ChipComponent from '@/components/ui/chip';
import { type POI } from '@/types/pois';

type SearchPOIResultInfoProps = POI;

const SearchPOIResultInfo = (props: SearchPOIResultInfoProps) => {
  const {
    poi_name,
    poi_address,
    poi_point_avg,
    poi_point_count,
    poi_point_ally
  } = props;
  return (
    <div className='p-4'>
      <section className='relative flex flex-col gap-2 mb-2'>
        <h2 className='text-18M'>{poi_name}</h2>
        <p className='text-14M'>{poi_address}</p>
        <ChipComponent className='absolute top-0 right-0'>~Text~</ChipComponent>
      </section>
      <POIRatingComponent
        score={poi_point_ally}
        rating={poi_point_avg}
        count={poi_point_count}
      />
    </div>
  );
};

export default SearchPOIResultInfo;
