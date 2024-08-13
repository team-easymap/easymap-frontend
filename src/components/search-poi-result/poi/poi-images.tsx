import { type POI } from '@/types/pois';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

type SearchPOIResultImagesProps = {
  images: POI['imgs_on_poi'];
};

const SearchPOIResultImages = (props: SearchPOIResultImagesProps) => {
  const { images } = props;
  return (
    <ul className='flex gap-2 px-4 overflow-hidden overflow-x-auto flex-nowrap'>
      {[...images, ...images].map((image, idx) => (
        <li className='flex-none w-20 h-full' key={`${image.img_id}-${idx}`}>
          <AspectRatio ratio={12 / 17} className='overflow-hidden rounded-sm'>
            <img
              className='object-cover'
              src={
                'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80'
              }
              alt='Landscape photograph by Tobias Tullius'
            />
          </AspectRatio>
        </li>
      ))}
    </ul>
  );
};

export default SearchPOIResultImages;
