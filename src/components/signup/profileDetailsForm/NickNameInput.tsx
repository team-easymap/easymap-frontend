import { Input } from '@/components/ui/input';

const NickNameInput = () => {
  return (
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
  );
};

export default NickNameInput;
