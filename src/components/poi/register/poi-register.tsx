import Header from '@/components/common/Header';
import { useState } from 'react';
import PoiAddress from '../ui/poi-address';
import PoiInputBox from '../ui/poi-box';
import PoiCategory from '../ui/poi-category';
import PoiTag from '../ui/poi-tag';
import ImageInput from '@/components/common/imageInput';
import SaveButton from '../ui/saveButton';
import { useCategories } from '@/hooks/queries/useCategories';
import { ConvertCategories } from '@/store/category';
//POI 등록하는 컴포너늩

const PoiRegisterComponent = () => {
  const categories = useCategories();
  const [address, setAddress] = useState<string>('');
  const [mainCategory, setMainCategory] = useState<keyof ConvertCategories>('');
  const [subCategory, setSubCategory] = useState<
    ConvertCategories[typeof mainCategory]['detail']
  >([]);
  const [keyword, setKeyword] = useState<
    ConvertCategories[typeof mainCategory]['tags']
  >([]);
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
            categories={Object.keys(categories)}
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
              data={categories[mainCategory].detail}
              tag={subCategory}
              setTag={setSubCategory}
            />
          </PoiInputBox>
          <PoiInputBox
            title='접근성 태그를 선택해주세요'
            subtitle='등록하려고 하는 장소와 어울리는 접근성이 필요해요'>
            <PoiTag
              data={categories[mainCategory].tags}
              tag={keyword}
              setTag={setKeyword}
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
