import Header from '@/components/common/Header';
import { useState } from 'react';
import PoiModifyAddress from '../ui/poi-modify-address';
import PoiModifyBox from '../ui/poi-modify-box';
import PoiModifyCategory from '../ui/poi-modify-category';
import PoiModifyTag from '../ui/poi-modify-tag';
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

//POI 수정 컴포넌트
const PoiRegisterComponent = () => {
  const [address, setAddress] = useState<string>('부산광역시 화명신도시로 145');
  const [mainCategory, setMainCategory] = useState<string>('식음료');
  const [keyword, setKeyword] = useState<string[]>(['음식점', '카페']);
  const [subCategory, setSubCategory] = useState<string[]>(['출입구 경사물']);
  const [imgFile, setImgFile] = useState(['1', '2'] as string[]);

  const onClick = () => {
    console.log(address, mainCategory, keyword, subCategory, imgFile);
  };
  return (
    <>
      <Header title='장소 수정하기'></Header>
      <PoiModifyBox>
        <PoiModifyAddress address={address} setAddress={setAddress} />
      </PoiModifyBox>

      {address !== '' && (
        <PoiModifyBox>
          <PoiModifyCategory
            mainCategory={mainCategory}
            setMainCategory={setMainCategory}
            setKeyword={setKeyword}
            setSubCategory={setSubCategory}
            setImgFile={setImgFile}
          />
        </PoiModifyBox>
      )}
      {address !== '' && mainCategory !== '' && mainCategory !== '' && (
        <>
          <PoiModifyBox>
            <PoiModifyTag
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
          </PoiModifyBox>
          <PoiModifyBox>
            <PoiModifyTag
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
          </PoiModifyBox>
        </>
      )}

      {address !== '' &&
        mainCategory !== '' &&
        keyword.length !== 0 &&
        subCategory.length !== 0 && (
          <>
            <PoiModifyBox>
              <ImageInput imgFile={imgFile} setImgFile={setImgFile} />
            </PoiModifyBox>
          </>
        )}

      {address !== '' &&
        mainCategory !== '' &&
        keyword.length !== 0 &&
        subCategory.length !== 0 &&
        imgFile.length !== 0 && (
          <SaveButton onClick={onClick}>수정하기</SaveButton>
        )}
    </>
  );
};
export default PoiRegisterComponent;
