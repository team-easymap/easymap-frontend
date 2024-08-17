import { type POI } from '@/types/pois';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

type POIImagesProps = {
  images: POI['imgs_on_poi'];
};

const POIImages = (props: POIImagesProps) => {
  const { images } = props;
  return (
    <ul className='flex flex-nowrap gap-2 overflow-hidden overflow-x-auto px-4'>
      {[...images, ...images].map((image, idx) => (
        <li className='h-full w-20 flex-none' key={`${image.img_id}-${idx}`}>
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

export default POIImages;
