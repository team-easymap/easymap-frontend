import ChipComponent from '@/components/ui/chip';
import { type POI } from '@/types/pois';

type SearchPOIResultTagsProps = {
  tags: POI['tags_on_poi'];
};

const SearchPOIResultTags = (props: SearchPOIResultTagsProps) => {
  const { tags } = props;
  return (
    <ul className='flex flex-wrap px-4 mb-4 gap-x-2 gap-y-4'>
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

export default SearchPOIResultTags;
