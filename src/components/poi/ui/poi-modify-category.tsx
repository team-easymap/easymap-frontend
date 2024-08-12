import { CommonButton } from '@/components/common/commonButton';

type MainCategoryProps = {
  mainCategory: string;
  setMainCategory: (categories: string) => void; // 수정: 문자열 배열을 인자로 받도록 변경
  setKeyword: (keywords: string[]) => void;
  setSubCategory: (subcategory: string[]) => void;
  setImgFile: (img: string[]) => void;
};

const categories = [
  '식음료',
  '생활시설',
  '장애인용 화장실 ',
  '휠체어 이동시설',
  '장애물'
];

//메인 카테고리에 따라 키워드가 달라짐
const PoiModifyCategory = ({
  mainCategory,
  setMainCategory,
  setKeyword,
  setSubCategory,
  setImgFile
}: MainCategoryProps) => {
  const handleCategoryClick = (category: string) => {
    setMainCategory(category);
    setKeyword([]);
    setSubCategory([]);
    setImgFile([]);
  };

  return (
    <div className='w-full p-4'>
      <span className='text-16M'>대분류 유형을 선택해주세요</span>
      <div className='m-auto my-2 box-border flex w-full flex-wrap gap-2'>
        {categories.map((category) => (
          <CommonButton
            key={category}
            use='category'
            radius='small'
            color={mainCategory.includes(category) ? 'purple' : 'white'}
            onClick={() => handleCategoryClick(category)}>
            {category}
          </CommonButton>
        ))}
      </div>
    </div>
  );
};

export default PoiModifyCategory;
