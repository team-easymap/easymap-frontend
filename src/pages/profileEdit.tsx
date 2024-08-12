import Header from '@/components/common/Header';
import NickNameInput from '@/components/signup/profileDetailsForm/NickNameInput';
import ProgileImgEdit from '@/components/signup/profileDetailsForm/ProgileImgEdit';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Header title='프로필 편집' prevOnClick={() => navigate(-1)} />
      <div className='flex h-[calc(100vh-58px)] flex-col justify-between'>
        <div className='flex flex-col items-center gap-[24px] py-[16px]'>
          <ProgileImgEdit />
          <NickNameInput />

          {/* email 입력 form */}
          <div className='w-[90%]'>
            <label className='mb-[8px]'>이메일</label>
            <Input
              placeholder='이메일을 입력해주세요'
              className='mt-[8px] h-[100%] h-[60px] focus:border-none focus:outline-none'
            />
          </div>

          {/* 생년월일 입력 form */}
          <div className='w-[90%]'>
            <label className='mb-[8px]'>생년월일</label>
            <Input
              placeholder='생년월일을 입력해주세요'
              className='mt-[8px] h-[60px] focus:border-none focus:outline-none'
            />
          </div>

          {/* 성별 선택 form */}
          <div className='w-[90%]'>
            <label className='mb-[8px]'>성별</label>
            <div className='mt-[8px] flex h-[36px] gap-[10px]'>
              <button className='flex-grow rounded-[4px] bg-gray-1 text-14M'>
                남자
              </button>
              <button className='flex-grow rounded-[4px] bg-blue-500 bg-gray-9 text-14M text-white'>
                여자
              </button>
            </div>
          </div>
        </div>

        <div className='relative z-30 flex h-[60px] w-[100%] items-center justify-center border-t border-gray-3 bg-white'>
          <button className='h-[36px] w-[90%] rounded-[4px] bg-[#A65CF5] text-14M text-white'>
            다음
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProfileEdit;
