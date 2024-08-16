import { CommonButton } from '@/components/common/commonButton';

type PoiTagProps = {
  data: string[];
  tag: string[];
  setTag: (tags: string[]) => void;
};
const PoiTag = (props: PoiTagProps) => {
  const { data, tag, setTag } = props;
  const handlerTagClick = (data: string) => {
    if (tag.includes(data)) {
      setTag(tag.filter((t) => t !== data));
    } else {
      setTag([...tag, data]);
    }
  };
  return (
    <div className='mt-2 w-full'>
      <div className='m-auto my-2 box-border flex w-full flex-wrap gap-2'>
        {data.map((d) => (
          <CommonButton
            key={d}
            color={tag.includes(d) ? 'purple' : 'gray'}
            radius='large'
            use='text'
            onClick={() => handlerTagClick(d)}>
            {d}
          </CommonButton>
        ))}
      </div>
    </div>
  );
};
export default PoiTag;