import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import ChipComponent from '../ui/chip';
import POIRatingComponent from '../common/rating';

const POIListComponent = () => {
  const list = [
    { score: 3.2, rating: 2, count: 32 },
    { score: 4.4, rating: 4, count: 24324 },
    { score: 2.3, rating: 1, count: 23 },
    { score: 3.2, rating: 0, count: 32 },
    { score: 4.4, rating: 4, count: 24324 },
    { score: 2.3, rating: 3, count: 23 }
  ];
  return (
    <ul className='grid w-full grid-cols-2 gap-4 p-4'>
      {list.map((item, i) => (
        <li key={i}>
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
            <h2 className='text-14M'>땡땡이네</h2>
            <ChipComponent>! TEXT !</ChipComponent>
          </section>
          <POIRatingComponent {...item} />
        </li>
      ))}
    </ul>
  );
};

export default POIListComponent;
