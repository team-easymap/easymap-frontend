import { CommonButton } from '@/components/common/commonButton';
import { ConvertCategories } from '@/store/category';

type PoiCategoryProps = {
  categories: string[];
  mainCategory: string;
  setMainCategory: (categories: string) => void; // 수정: 문자열 배열을 인자로 받도록 변경
  setKeyword: (
    keywords: ConvertCategories[keyof ConvertCategories]['tags']
  ) => void;
  setSubCategory: (
    subcategory?: ConvertCategories[keyof ConvertCategories]['detail'][number]
  ) => void;
  setImgFile: (img: File[]) => void;
};

//메인 카테고리에 따라 키워드가 달라짐
const PoiCategory = ({
  categories,
  mainCategory,
  setMainCategory,
  setKeyword,
  setSubCategory,
  setImgFile
}: PoiCategoryProps) => {
  const handleCategoryClick = (category: string) => {
    setMainCategory(category);
    setKeyword([]);
    setSubCategory();
    setImgFile([]);
  };

  return (
    <div className='mt-2 w-full'>
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

export default PoiCategory;
