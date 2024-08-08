import { Button } from '../ui/button';
import IconComponent from '../ui/icon';

const POIButtons = () => {
  return (
    <div className='flex justify-between px-4 pb-4'>
      <Button
        variant='ghost'
        className='mx-0.5 flex h-fit flex-col gap-2 px-2.5 py-2'>
        <IconComponent name='edit' />
        <h2>후기 등록</h2>
      </Button>
      <Button
        variant='ghost'
        className='mx-0.5 flex h-fit flex-col gap-2 px-2.5 py-2'>
        <IconComponent name='share' />
        <h2>공유하기</h2>
      </Button>
      <Button
        variant='ghost'
        className='mx-0.5 flex h-fit min-w-[75px] flex-col gap-2 px-2.5 py-2'>
        <IconComponent name='map' />
        <h2>길찾기</h2>
      </Button>
      <Button
        variant='ghost'
        className='mx-0.5 flex h-fit flex-col gap-2 px-2.5 py-2'>
        <IconComponent name='warning' />
        <h2>수정 요청</h2>
      </Button>
    </div>
  );
};

export default POIButtons;
