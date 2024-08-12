import { Textarea } from '@/components/ui/textarea';

type ReviewContentProps = {
  reviewText: string;
  setReviewText: (text: string) => void;
};
const PoiReviewContent = (props: ReviewContentProps) => {
  const { reviewText, setReviewText } = props;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(event.target.value);
  };
  return (
    <div className='h-full w-full flex-1 border-y-4 border-gray-100 p-4'>
      <span className='text-16M'>이미지 등록</span>
      <Textarea
        value={reviewText}
        onChange={handleChange}
        className='my-2 h-[80%]'
        placeholder='리뷰를 작성해주세요.

작성한 후기은 노출되며 다른 사용자들이 볼 수 있으니, 서로를 배려하는 마음으로 좋은 정보들을 담아주세요.'
      />
      <span className='float-right mb-3'>{reviewText?.length}/300</span>
    </div>
  );
};

export default PoiReviewContent;
