import SmileIcon from '@/assets/smile.svg';
import IconComponent from '@/components/ui/icon';

const ProgileImgEdit = () => {
  return (
    <div className='relative h-[120px] w-[120px] rounded-full bg-gray-200'>
      <img
        src={SmileIcon}
        className='h-full w-full rounded-full object-cover'
      />
      <span className='absolute bottom-0 right-0 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-gray-3 bg-white text-black'>
        <IconComponent name='plus' />
      </span>
    </div>
  );
};

export default ProgileImgEdit;
