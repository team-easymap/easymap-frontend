import IconComponent from '../ui/icon';

type POIRatingComponentProps = {
  score: number;
  rating: number;
  count?: number;
  size?: 'sm' | 'md';
};

const POIRatingComponent = (props: POIRatingComponentProps) => {
  const { score, rating, count, size = 'md' } = props;
  const empty = 5 - rating;

  const sizeStyle = {
    sm: {
      score: 'text-12M',
      iconSize: 'sm',
      count: 'text-12R'
    },
    md: {
      score: 'text-14M',
      iconSize: 'md',
      count: 'text-14R'
    }
  } as {
    [key: string]: {
      score: 'text-12M' | 'text-14M';
      iconSize: 'sm' | 'md';
      count: 'text-12R' | 'text-14R';
    };
  };

  return (
    <div className='flex items-center gap-1'>
      <span className={sizeStyle[size!].score}>{score}</span>
      <ul className='flex items-center'>
        {Array(rating)
          .fill(0)
          .map((e, i) => (
            <IconComponent
              name='starFill'
              color='text-primary'
              size={sizeStyle[size!].iconSize}
              key={`primary${e}+${i}`}
            />
          ))}
        {Array(empty)
          .fill(0)
          .map((e, i) => (
            <IconComponent
              name='starFill'
              color='text-gray-3'
              size={sizeStyle[size!].iconSize}
              key={`${i}+${e}`}
            />
          ))}
      </ul>

      {/* count prop이 없을 때 리뷰수를 보여주지 않는다. */}
      {count && (
        <span
          className={`whitespace-nowrap ${sizeStyle[size!].count} text-gray-6`}>
          리뷰 {count}
        </span>
      )}
    </div>
  );
};

export default POIRatingComponent;
