import RatingMake from './rating-make';
import PoiReviewModifyBox from './review-modify-box';
import Header from '@/components/common/Header';
import PoiReviewContent from './review-content';
import ImageInput from '@/components/common/imageInput';
import SaveButton from '../../ui/saveButton';
import { useState } from 'react';
const PoiReviewModifyComponent = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [imgFile, setImgFile] = useState<string[]>([]);

  const onClick = () => {
    console.log(selectedRating, reviewText, imgFile);
  };
  return (
    <>
      <Header title='후기 등록' />
      <PoiReviewModifyBox>
        <RatingMake
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
      </PoiReviewModifyBox>
      <PoiReviewModifyBox>
        <ImageInput imgFile={imgFile} setImgFile={setImgFile} />
      </PoiReviewModifyBox>
      <PoiReviewContent reviewText={reviewText} setReviewText={setReviewText} />
      <SaveButton onClick={onClick}>수정하기</SaveButton>
    </>
  );
};
export default PoiReviewModifyComponent;
