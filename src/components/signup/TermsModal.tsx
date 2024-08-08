import { useState } from 'react';
import { Checkbox } from '../ui/checkbox';

const TermsModal = () => {
  // 약관 list
  const [terms, setTerms] = useState([
    {
      id: 1,
      title: '서비스 이용약관',
      content: '',
      checked: false
    },
    {
      id: 2,
      title: '개인정보 수집 및 이용 동의',
      content: '',
      checked: false
    },
    {
      id: 3,
      title: '위치 기반 서비스 이용 동의',
      content: '',
      checked: false
    }
  ]);

  // 체크박스 클릭 시 체크 상태를 반전시키는 함수
  const checkboxToggle = (id: number) => {
    setTerms((prevTerms) =>
      prevTerms.map((term) =>
        term.id === id ? { ...term, checked: !term.checked } : term
      )
    );
  };

  // 모든 약관 동의로 변경 함수
  const allCheckboxToggle = () => {
    setTerms((prevTerms) =>
      prevTerms.map((term) => ({
        ...term,
        checked: !term.checked
      }))
    );
  };

  return (
    <>
      <div className='absolute left-0 top-0 h-[100vh] w-[100vw] bg-black'></div>

      <div className='bt-gray-5 absolute bottom-0 flex w-[100%] flex-col items-center rounded rounded-tl-[12px] rounded-tr-[12px] border bg-white'>
        <h2 className='h-[58px] w-[100%] border-b text-center text-20B leading-[58px]'>
          약관 동의
        </h2>

        <div className='flex w-[90%] flex-col gap-[12px] pb-[25px] pt-[25px]'>
          <div className='mb-[12px] flex gap-[8px]'>
            <Checkbox
              className='rounded-full'
              onClick={() => allCheckboxToggle()}
            />
            <p className='text-14M'>모두 동의합니다.</p>
          </div>

          {terms.map((v, i) => (
            <div key={i} className='flex justify-between gap-[8px]'>
              <div className='flex gap-[8px]'>
                <Checkbox
                  checked={v.checked}
                  onClick={() => checkboxToggle(v.id)}
                  className='rounded-full'
                />
                <span className='rounded-[100px] border border-[#A65CF5] pl-[4px] pr-[4px] text-12R text-[#A65CF5]'>
                  필수
                </span>
                <p className='text-14R'>{v.title}</p>
              </div>
              <p className='text-14M text-gray-6'>내용보기</p>
            </div>
          ))}
        </div>

        <div className='bt-gray-3 relative z-30 flex h-[60px] w-[100%] items-center justify-center border bg-white'>
          <button className='h-[36px] w-[90%] rounded-[4px] bg-[#A65CF5] text-14M text-white'>
            동의
          </button>
        </div>
      </div>
    </>
  );
};

export default TermsModal;
