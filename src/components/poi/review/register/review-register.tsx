import RatingMake from '../ui/rating-make';
import PoiReviewBox from '../ui/review-modify-box';
import Header from '@/components/common/Header';
import PoiReviewContent from '../ui/review-content';
import ImageInput from '@/components/common/imageInput';
import SaveButton from '../../ui/saveButton';
import { useState } from 'react';
const PoiReviewRegisterComponent = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [imgFile, setImgFile] = useState<string[]>([]);

  const onClick = () => {
    console.log(selectedRating, reviewText, imgFile);
  };
  return (
    <>
      <Header title='후기 등록' />
      <PoiReviewBox title='이 장소에 대한 평점을 남겨주세요'>
        <RatingMake
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
      </PoiReviewBox>
      <PoiReviewBox title='이미지 등록'>
        <ImageInput imgFile={imgFile} setImgFile={setImgFile} />
      </PoiReviewBox>
      <PoiReviewContent reviewText={reviewText} setReviewText={setReviewText} />
      <SaveButton onClick={onClick}>수정하기</SaveButton>
    </>
  );
};
export default PoiReviewRegisterComponent;
