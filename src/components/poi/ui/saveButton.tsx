import { CommonButton } from '@/components/common/commonButton';

type SaveProps = {
  onClick: () => void;
  children: React.ReactNode;
};
const SaveButton = (props: SaveProps) => {
  const { onClick, children } = props;
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
        {children}
      </CommonButton>
    </div>
  );
};
export default SaveButton;
