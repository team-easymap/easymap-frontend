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
import { Input } from '@/components/ui/input';
import { createPOI } from '@/api/poi';
import { useCoords } from '@/hooks/queries/useCoords';

//POI 등록하는 컴포너늩

const PoiRegisterComponent = () => {
  const categories = useCategories();
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<{ address: string; bcode: string }>({
    address: '',
    bcode: ''
  });
  const [mainCategory, setMainCategory] = useState<keyof ConvertCategories>('');
  const [subCategory, setSubCategory] =
    useState<ConvertCategories[typeof mainCategory]['detail'][number]>();
  const [keyword, setKeyword] = useState<
    ConvertCategories[typeof mainCategory]['tags']
  >([]);
  const [imgFile, setImgFile] = useState<File[]>([]);
  const coords = useCoords(address.address);

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('poi_name', name);
    formData.append('poi_address', address.address);
    formData.append('detailed_category_id', '' + subCategory!.id);
    formData.append('poi_code', address.bcode);
    formData.append('tag_list', JSON.stringify(keyword.map((tag) => tag.id)));
    imgFile.forEach((file) => formData.append('images', file));
    if (coords?.lat && coords.lng) {
      formData.append('lat', '' + coords.lat);
      formData.append('lng', '' + coords.lng);
    }
    createPOI(formData);
  };

  return (
    <>
      <Header title='장소 이름'></Header>
      <PoiInputBox title=' 입력해주세요'>
        <Input
          className='my-2'
          type='text'
          placeholder='장소 이름을 입력해주세요.'
          onChange={(e) => setName(e.target.value)}
        />
      </PoiInputBox>
      <PoiInputBox
        title='주소를 입력해주세요'
        subtitle='장소를 등록하기 위해 주소 정보가 필요해요'>
        <PoiAddress address={address.address} setAddress={setAddress} />
      </PoiInputBox>

      {address.address !== '' && (
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
      {address.address !== '' && mainCategory !== '' && mainCategory !== '' && (
        <>
          <PoiInputBox title='카테고리'>
            <PoiTag
              data={categories[mainCategory].detail}
              tag={subCategory}
              setTag={(tag: typeof subCategory | typeof keyword) => {
                if (!Array.isArray(tag)) {
                  setSubCategory(tag);
                }
              }}
            />
          </PoiInputBox>
          <PoiInputBox
            title='접근성 태그를 선택해주세요'
            subtitle='등록하려고 하는 장소와 어울리는 접근성이 필요해요'>
            <PoiTag
              data={categories[mainCategory].tags}
              tag={keyword}
              setTag={(tag: typeof keyword | typeof subCategory) => {
                if (Array.isArray(tag)) {
                  setKeyword(tag);
                }
              }}
            />
          </PoiInputBox>
        </>
      )}

      {address.address !== '' &&
        mainCategory !== '' &&
        keyword.length !== 0 &&
        subCategory && (
          <>
            <PoiInputBox
              title='이미지 등록'
              subtitle='장소의 존재를 증명할 수 있는 사진(간판, 출입구 등)이 필요해요'>
              <ImageInput imgFile={imgFile} setImgFile={setImgFile} />
            </PoiInputBox>
          </>
        )}

      {address.address !== '' &&
        mainCategory !== '' &&
        keyword.length !== 0 &&
        subCategory &&
        imgFile.length !== 0 && (
          <SaveButton onClick={onSubmit}>등록하기</SaveButton>
        )}
    </>
  );
};
export default PoiRegisterComponent;
