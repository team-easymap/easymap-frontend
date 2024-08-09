import IconComponent from '../ui/icon';

type POIRatingComponentProps = {
  score: number;
  rating: number;
  count: number;
};

const POIRatingComponent = (props: POIRatingComponentProps) => {
  const { score, rating, count } = props;
  const empty = 5 - rating;
  return (
    <div className='flex items-center gap-1'>
      <span className='text-12M'>{score}</span>
      <ul className='flex items-center'>
        {Array(rating)
          .fill(0)
          .map(() => (
            <IconComponent name='starFill' color='text-gray-3' size='sm' />
          ))}
        {Array(empty)
          .fill(0)
          .map(() => (
            <IconComponent name='starFill' color='text-white' size='sm' />
          ))}
      </ul>
      <span className='whitespace-nowrap text-12R text-gray-6'>
        리뷰 {count}
      </span>
    </div>
  );
};

export default POIRatingComponent;
