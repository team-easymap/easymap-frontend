import IconComponent from '@/components/ui/icon';

type RatingProps = {
  selectedRating: number;
  setSelectedRating: (selectedRating: number) => void;
};
const RatingMake = (props: RatingProps) => {
  const { selectedRating, setSelectedRating } = props;

  const handleStarHover = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    console.log('Selected Rating:', rating);
  };

  return (
    <div className='w-full p-4'>
      <span className='text-16M'>이 장소에 대한 평점을 남겨주세요</span>
      <div className='mt-[10px] flex gap-1'>
        <span className='text-20B'>{selectedRating}</span>
        {[1, 2, 3, 4, 5].map((rating) => (
          <div
            onMouseEnter={() => handleStarHover(rating)}
            onClick={() => handleStarClick(rating)}
            className='cursor-pointer py-1'>
            {selectedRating && rating <= selectedRating ? (
              <IconComponent key={rating} name='fillon' />
            ) : (
              <IconComponent key={rating} name='filloff' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingMake;
