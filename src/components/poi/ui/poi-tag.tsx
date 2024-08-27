import { CommonButton } from '@/components/common/commonButton';
import { ConvertCategories } from '@/store/category';

type POICategoryDataType =
  | ConvertCategories[keyof ConvertCategories]['detail']
  | ConvertCategories[keyof ConvertCategories]['tags'];

type POISubCategoryType =
  | ConvertCategories[keyof ConvertCategories]['detail'][number]
  | undefined;
type POITagType = ConvertCategories[keyof ConvertCategories]['tags'];

type PoiTagProps = {
  data: POICategoryDataType;
  tag: POISubCategoryType | POITagType;
  setTag: (tag: PoiTagProps['tag']) => void;
};
const PoiTag = (props: PoiTagProps) => {
  const { data, tag, setTag } = props;

  const handlerTagClick = (e: (typeof data)[number]) => {
    if (Array.isArray(tag)) {
      if (tag.find((t) => t.id === e.id)) {
        setTag(tag.filter((t) => t.id !== e.id));
      } else {
        setTag([...tag, e]);
      }
    } else {
      if (tag?.id !== e.id) {
        setTag(e);
      }
    }
  };

  const checkSelected = (d: (typeof data)[number]) => {
    if (Array.isArray(tag)) {
      return tag.find((t) => t.id === d.id);
    } else {
      return tag?.id === d.id;
    }
  };

  return (
    <div className='mt-2 w-full'>
      <div className='m-auto my-2 box-border flex w-full flex-wrap gap-2'>
        {data?.map((d) => (
          <CommonButton
            key={d.id}
            color={checkSelected(d) ? 'purple' : 'gray'}
            radius='large'
            use='text'
            onClick={() => handlerTagClick(d)}>
            {d.name}
          </CommonButton>
        ))}
      </div>
    </div>
  );
};
export default PoiTag;
