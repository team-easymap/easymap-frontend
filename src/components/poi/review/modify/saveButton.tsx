import { CommonButton } from '@/components/common/commonButton';

type SaveProps = {
  onClick: () => void;
};
const SaveButton = ({ onClick }: SaveProps) => {
  return (
    <div className='relative w-full border-y-2 p-4'>
      <CommonButton
        onClick={() => {
          onClick();
        }}
        color='purple'
        radius='small'
        use='category'
        className='justify-center'>
        등록하기
      </CommonButton>
    </div>
  );
};
export default SaveButton;
