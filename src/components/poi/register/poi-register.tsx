import Header from '@/components/common/Header';
import { useState } from 'react';
import PoiAddress from '../ui/poi-address';
import PoiInputBox from '../ui/poi-box';
import PoiCategory from '../ui/poi-category';
import PoiTag from '../ui/poi-tag';
import ImageInput from '@/components/common/imageInput';
import SaveButton from '../ui/saveButton';
const A1 = {
  data1: {
    tag: ['음식점', '카페', '주점'],
    subtag: [
      '출입구 경사물',
      '문턱 없음',
      '장애인용 화장실',
      '낮은 키오스크',
      '직원 서빙',
      '휠체어 리프트',
      '엘레베이터',
      '해당사항 없음'
    ]
  },
  data2: {
    tag: [
      '미용실',
      '숙박시설',
      '편의점',
      '휠체어 대여소',
      '마트',
      '전동 휠체어 충전소',
      '은행',
      '이동기기 수리센터'
    ],
    subtag: [
      '출입구 경사물',
      '문턱 없음',
      '장애인용 화장실',
      '낮은 키오스크',
      '직원 서빙',
      '휠체어 리프트',
      '엘레베이터',
      '해당사항 없음'
    ]
  },
  data3: {
    tag: ['여성', '남성', '공용'],
    subtag: [
      '출입구 경사물',
      '문턱 없음',
      ' 기저귀 교환대',
      '비상벨 없음',
      '해당사항 없음'
    ]
  },
  data4: {
    tag: ['휠체어 리프트', '엘레베이터'],
    subtag: ['안정적', '쾌적함', '해당사항 없음']
  },
  data5: {
    tag: ['장애물-이동불가', '주의-통행불편'],
    subtag: ['높은 단자', '좁은 보도폭', '급경사']
  }
};

//POI 등록하는 컴포너늩
const PoiRegisterComponent = () => {
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
      <Header title='장소 등록하기'></Header>
      <PoiInputBox
        title='주소를 입력해주세요'
        subtitle='장소를 등록하기 위해 주소 정보가 필요해요'>
        <PoiAddress address={address} setAddress={setAddress} />
      </PoiInputBox>

      {address !== '' && (
        <PoiInputBox title='대분류 유형을 선택해주세요'>
          <PoiCategory
            mainCategory={mainCategory}
            setMainCategory={setMainCategory}
            setKeyword={setKeyword}
            setSubCategory={setSubCategory}
            setImgFile={setImgFile}
          />
        </PoiInputBox>
      )}
      {address !== '' && mainCategory !== '' && mainCategory !== '' && (
        <>
          <PoiInputBox title='카테고리'>
            <PoiTag
              data={
                mainCategory === '식음료'
                  ? A1.data1.tag
                  : mainCategory === '생활시설'
                    ? A1.data2.tag
                    : mainCategory === '장애인용 화장실'
                      ? A1.data3.tag
                      : mainCategory === '휠체어 이동설비'
                        ? A1.data4.tag
                        : A1.data5.tag
              }
              tag={keyword}
              setTag={setKeyword}
            />
          </PoiInputBox>
          <PoiInputBox
            title='접근성 태그를 선택해주세요'
            subtitle='등록하려고 하는 장소와 어울리는 접근성이 필요해요'>
            <PoiTag
              data={
                mainCategory === '식음료'
                  ? A1.data1.subtag
                  : mainCategory === '생활시설'
                    ? A1.data2.subtag
                    : mainCategory === '장애인용 화장실'
                      ? A1.data3.subtag
                      : mainCategory === '휠체어 이동설비'
                        ? A1.data4.subtag
                        : A1.data5.subtag
              }
              tag={subCategory}
              setTag={setSubCategory}
            />
          </PoiInputBox>
        </>
      )}

      {address !== '' &&
        mainCategory !== '' &&
        keyword.length !== 0 &&
        subCategory.length !== 0 && (
          <>
            <PoiInputBox
              title='이미지 등록'
              subtitle='장소의 존재를 증명할 수 있는 사진(간판, 출입구 등)이 필요해요'>
              <ImageInput imgFile={imgFile} setImgFile={setImgFile} />
            </PoiInputBox>
          </>
        )}

      {address !== '' &&
        mainCategory !== '' &&
        keyword.length !== 0 &&
        subCategory.length !== 0 &&
        imgFile.length !== 0 && (
          <SaveButton onClick={onClick}>등록하기</SaveButton>
        )}
    </>
  );
};
export default PoiRegisterComponent;
