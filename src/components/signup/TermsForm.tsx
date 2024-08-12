import IconComponent from '../ui/icon';

const TermsForm = () => {
  return (
    <main className='flex flex-col items-center'>
      <div className='w-[90%] pt-[10px]'>
        <div className='pb-[24px]'>
          <h2 className='text-20B'>사용 접근 권한 안내</h2>
          <p className='text-14R'>
            서비스의 원활한 사용을 위해 아래 목록의 권한을 허용해주세요.
          </p>
        </div>

        <div className='pb-[24px]'>
          <h3 className='pb-[8px] text-16M'>필수 권한</h3>
          <div className='flex gap-[12px] pl-[8px] pr-[8px]'>
            <div className='flex h-[40px] w-[40px] min-w-[40px] items-center justify-center rounded-full bg-[#F6EEFF]'>
              <IconComponent name='mapPin' color='#A65CF5' />
            </div>
            <div>
              <h3 className='text-16M'>선택 권한</h3>
              <p className='text-14R text-gray-6'>
                아래 목록의 경우 허용하지 않아도 팬딩을 이용할 수 있으나 일부
                기능 이용에 제한이 있을 수 있어요.
              </p>
            </div>
          </div>
        </div>

        <div className='border-b border-t border-gray-3 pb-[24px] pt-[24px]'>
          <h3 className='text-16M'>필수 권한</h3>
          <p className='mb-[8px] text-14R text-gray-6'>
            아래 목록의 경우 허용하지 않아도 팬딩을 이용할 수 있으나 일부 기능
            이용에 제한이 있을 수 있어요.
          </p>
          <div className='mb-[8px] flex gap-[12px] pl-[8px] pr-[8px]'>
            <div className='flex h-[40px] w-[40px] min-w-[40px] items-center justify-center rounded-full bg-[#F6EEFF]'>
              <IconComponent name='mapPin' color='#A65CF5' />
            </div>
            <div>
              <h3 className='text-16M'>선택 권한</h3>
              <p className='text-14R text-gray-6'>
                아래 목록의 경우 허용하지 않아도 팬딩을 이용할 수 있으나 일부
                기능 이용에 제한이 있을 수 있어요.
              </p>
            </div>
          </div>
          <div className='flex gap-[12px] pl-[8px] pr-[8px]'>
            <div className='flex h-[40px] w-[40px] min-w-[40px] items-center justify-center rounded-full bg-[#F6EEFF]'>
              <IconComponent name='mapPin' color='#A65CF5' />
            </div>
            <div>
              <h3 className='text-16M'>선택 권한</h3>
              <p className='text-14R text-gray-6'>
                아래 목록의 경우 허용하지 않아도 팬딩을 이용할 수 있으나 일부
                기능 이용에 제한이 있을 수 있어요.
              </p>
            </div>
          </div>
        </div>

        <div className='pt-[24px]'>
          <h3 className='text-16M'>선택 권한</h3>
          <p className='text-14R text-gray-6'>
            아래 목록의 경우 허용하지 않아도 팬딩을 이용할 수 있으나 일부 기능
            이용에 제한이 있을 수 있어요.
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermsForm;
