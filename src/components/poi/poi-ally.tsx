import ChipComponent from '@/components/ui/chip';
import { type POI } from '@/types/pois';

type POIAllyProps = {
  tags: POI['tags_on_poi'];
};

const POIAlly = (props: POIAllyProps) => {
  const { tags } = props;
  return (
    <ul className='mb-4 flex flex-wrap gap-x-2 gap-y-4 px-4'>
      {tags.map((tag) => (
        <li key={tag.tag_id}>
          <ChipComponent size='sm' variant='fill'>
            {tag.tag_name}
          </ChipComponent>
        </li>
      ))}
    </ul>
  );
};

export default POIAlly;
