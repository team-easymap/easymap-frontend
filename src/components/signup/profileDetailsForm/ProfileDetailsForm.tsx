import { Input } from '@/components/ui/input';
import NickNameInput from './NickNameInput';
import ProgileImgEdit from './ProgileImgEdit';

const ProfileDetailsForm = () => {
  return (
    <main className='flex flex-col items-center gap-[24px] pt-[10px]'>
      <ProgileImgEdit />
      <NickNameInput />

      {/* email 입력 form */}
      <div className='w-[100%]'>
        <label className='mb-[8px]'>이메일</label>
        <Input
          placeholder='이메일을 입력해주세요'
          className='mb-[24px] mt-[8px] h-[100%] h-[60px] focus:border-none focus:outline-none'
        />
      </div>

      {/* 생년월일 입력 form */}
      <div className='w-[100%]'>
        <label className='mb-[8px]'>생년월일</label>
        <Input
          placeholder='생년월일을 입력해주세요'
          className='mb-[24px] mt-[8px] h-[60px] focus:border-none focus:outline-none'
        />
      </div>

      {/* 성별 선택 form */}
      <div className='w-[100%]'>
        <label className='mb-[8px]'>성별</label>
        <div className='mb-[24px] mt-[8px] flex h-[36px] gap-[10px]'>
          <button className='flex-grow rounded-[4px] bg-gray-1 text-14M'>
            남자
          </button>
          <button className='flex-grow rounded-[4px] bg-blue-500 bg-gray-9 text-14M text-white'>
            여자
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProfileDetailsForm;
