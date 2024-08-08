import ReviewImages from './review-images';
import ReviewInfo from './review-info';

const ReviewComponent = () => {
  return (
    <li className='flex flex-col gap-3 rounded-sm border border-gray-3 p-4'>
      <ReviewInfo />
      <ReviewImages />
      <p>
        장소 상세 정보 후기 내용...장소 상세 정보 후기 내용...장소 상세 정보
        후기 내용...장소 상세 정보 후기 내용...장소 상세 정보 후기 내용...장소
        상세 정보 후기 내용...장소 상세 정보 후기 내용... 배고프다...
      </p>
    </li>
  );
};

export default ReviewComponent;
