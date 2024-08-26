import { CommonButton } from '@/components/common/commonButton';
import { ConvertCategories } from '@/store/category';

type POICategoryTagType =
  | ConvertCategories[keyof ConvertCategories]['detail']
  | ConvertCategories[keyof ConvertCategories]['tags'];

type PoiTagProps = {
  data: POICategoryTagType;
  tag: POICategoryTagType;
  setTag: (tags: POICategoryTagType) => void;
};
const PoiTag = (props: PoiTagProps) => {
  const { data, tag, setTag } = props;
  const handlerTagClick = (e: POICategoryTagType[number]) => {
    if (tag.find((t) => t.id === e.id)) {
      setTag(tag.filter((t) => t.id !== e.id));
    } else {
      setTag([...tag, e]);
    }
  };
  return (
    <div className='mt-2 w-full'>
      <div className='m-auto my-2 box-border flex w-full flex-wrap gap-2'>
        {data?.map((d) => (
          <CommonButton
            key={d.id}
            color={tag.find((t) => t.id === d.id) ? 'purple' : 'gray'}
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
