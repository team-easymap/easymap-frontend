import { Input } from '../ui/input';

const UserInfoForm = () => {
  return (
    <main
      style={{ height: 'calc(100vh - 58px)' }}
      className='flex flex-col items-center pt-[10px]'>
      <div
        style={{ height: 'calc(100% - 60px)' }}
        className='flex w-[90%] flex-col items-center pt-[10px] text-16M'>
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
      </div>

      <div className='bt-gray-3 relative z-30 flex h-[60px] w-[100%] items-center justify-center border bg-white'>
        <button className='h-[36px] w-[90%] rounded-[4px] bg-[#A65CF5] text-14M text-white'>
          다음
        </button>
      </div>
    </main>
  );
};

export default UserInfoForm;
