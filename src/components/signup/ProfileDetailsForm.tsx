import SmileIcon from '@/assets/smile.svg';
import { Input } from '../ui/input';
import IconComponent from '../ui/icon';

const ProfileDetailsForm = () => {
  return (
    <main className='flex flex-col items-center pt-[10px]'>
      <div className='relative mb-[24px] h-[120px] w-[120px] rounded-full bg-gray-200'>
        <img
          src={SmileIcon}
          className='h-full w-full rounded-full object-cover'
        />
        <span className='absolute bottom-0 right-0 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-gray-3 bg-white text-black'>
          <IconComponent name='plus' />
        </span>
      </div>

      {/* 닉네임 입력 form */}
      <div className='w-[90%]'>
        <label className='text-16M'>닉네임</label>
        <div className='mb-[8px] mt-[8px] flex h-[60px] gap-[8px]'>
          <Input
            placeholder='10자 이내로 입력해주세요'
            className='mb-[24px] h-[100%] basis-3/4 focus:border-none focus:outline-none'
          />
          <button className='basis-1/4 rounded-[4px] bg-gray-9 text-14M text-white'>
            중복 확인
          </button>
        </div>
        {/* 사용자가 입력한 닉네임 글자수 체크 */}
        <p className='text-right text-14R text-gray-6'>0/10</p>
      </div>
    </main>
  );
};

export default ProfileDetailsForm;
