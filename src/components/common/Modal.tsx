type ModalProps = {
  title: string;
  subTitle: string;
  // 주 기능이 작동하는 버튼의 text
  btnText: string;
  // 모달의 주 기능이 되는 함수
  approvalFC: () => void;
  // 아니오 버튼 클릭시 실행
  toggleFC: () => void;
};

const Modal: React.FC<ModalProps> = ({
  toggleFC,
  approvalFC,
  title,
  subTitle,
  btnText
}) => {
  return (
    <div className='absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center rounded-[6px] border bg-white p-[20px]'>
      <h2 className='w-full whitespace-nowrap text-20B'>{title}</h2>
      <h3 className='w-full whitespace-nowrap pb-[20px] text-14M text-gray-6'>
        {subTitle}
      </h3>

      <div className='flex justify-end gap-[8px] text-14M'>
        <button
          className='rounded-[4px] border px-[16px] py-[8px]'
          onClick={() => toggleFC()}>
          아니오
        </button>
        <button
          className='rounded-[4px] bg-red-7 px-[16px] py-[8px] text-white'
          onClick={() => approvalFC()}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
