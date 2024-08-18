import POIRatingComponent from '@/components/common/rating';
import ChipComponent from '@/components/ui/chip';
import { POI } from '@/types/pois';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { useNavigate } from 'react-router-dom';

type POIListItemProps = POI;

const POIListItem = (props: POIListItemProps) => {
  const { poi_id, poi_name, poi_point_avg, poi_point_count, poi_point_ally } =
    props;
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`/search/poi/${poi_id}`)}>
      <AspectRatio
        ratio={16 / 10.5}
        className='w-full mb-4 overflow-hidden rounded-sm'>
        <img
          className='object-cover'
          src='https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80'
          alt='Landscape photograph by Tobias Tullius'
        />
      </AspectRatio>
      <section className='flex justify-between gap-2 mb-1'>
        <h2 className='text-14M'>{poi_name}</h2>
        <ChipComponent>! TEXT !</ChipComponent>
      </section>
      <POIRatingComponent
        score={poi_point_ally}
        rating={poi_point_avg}
        count={poi_point_count}
        size='sm'
      />
    </li>
  );
};

export default POIListItem;
