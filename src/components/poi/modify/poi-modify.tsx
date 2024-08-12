import { useState } from 'react';

import Header from '@/components/common/Header';
import PoiModifyAddress from './poi-modify-address';
import PoiModifyBox from './poi-modify-box';
import PoiModifyCategory from './poi-modify-category';
import PoiModifyTag from './poi-modify-tag';
import ImageInput from '@/components/common/imageInput';
import SaveButton from '../review/modify/saveButton';
const A1 = [
  '출입구 경사로',
  '문턱 없음',
  '휠체어 리프트',
  '장애인용 화장실',
  '엘리베이터',
  '낮은 키오스크',
  '해당 사항 없음',
  '직원 도움 및 서빙'
];
const A2 = [
  '음식점',
  '카페',
  '주점',
  '미용실',
  '마트',
  '편의점',
  '숙박',
  '은행',
  '휠체어 대여소',
  '전동 휠체어 충전소',
  '이동 기기 수리 센터',
  '기타'
];
const PoiModifyComponent = () => {
  const [address, setAddress] = useState<string>('');
  const [mainCategory, setMainCategory] = useState<string>('');
  const [keyword, setKeyword] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const [imgFile, setImgFile] = useState([] as string[]);

  const onClick = () => {
    console.log(address, mainCategory, keyword, subCategory, imgFile);
  };
  return (
    <>
      <Header title='장소 편집하기'></Header>
      <PoiModifyBox>
        <PoiModifyAddress address={address} setAddress={setAddress} />
      </PoiModifyBox>
      <PoiModifyBox>
        <PoiModifyCategory
          mainCategory={mainCategory}
          setMainCategory={setMainCategory}
        />
      </PoiModifyBox>

      <PoiModifyBox>
        <PoiModifyTag data={A1} tag={keyword} setTag={setKeyword} />
      </PoiModifyBox>

      <PoiModifyBox>
        <PoiModifyTag data={A2} tag={subCategory} setTag={setSubCategory} />
      </PoiModifyBox>
      <PoiModifyBox>
        <ImageInput imgFile={imgFile} setImgFile={setImgFile} />
      </PoiModifyBox>
      <SaveButton onClick={onClick} />
    </>
  );
};
export default PoiModifyComponent;
