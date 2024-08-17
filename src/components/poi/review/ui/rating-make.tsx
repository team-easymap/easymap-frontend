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
    <div className='mt-2 w-full'>
      <div className='mt-[10px] flex gap-1'>
        <span className='text-20B'>{selectedRating}</span>
        {[1, 2, 3, 4, 5].map((rating, index) => (
          <div
            key={index}
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
