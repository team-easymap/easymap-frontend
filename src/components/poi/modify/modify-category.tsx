import { CommonButton } from '@/components/common/commonButton';

type MainCategoryProps = {
  mainCategory: string;
  setMainCategory: (categories: string) => void; // 수정: 문자열 배열을 인자로 받도록 변경
};

const categories = ['대분류 1', '대분류 2', '대분류 3', '대분류 4'];

const PoiModifyCategory = ({
  mainCategory,
  setMainCategory
}: MainCategoryProps) => {
  const handleCategoryClick = (category: string) => {
    setMainCategory(category);
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
