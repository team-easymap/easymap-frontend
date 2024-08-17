import Header from '@/components/common/Header';
import { useNavigate } from 'react-router-dom';
import SmileImg from '@/assets/smile.svg';
import IconComponent from '@/components/ui/icon';

const MyReviews = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Header title='내가 쓴 후기' prevOnClick={() => navigate(-1)} />

      <ul className='mx-auto my-0 w-[90%] pt-[58px]'>
        <li className='flex flex-col gap-[12px] p-[16px]'>
          <div className='flex h-[44px] items-center justify-between'>
            <div className='flex gap-[8px]'>
              <img src={SmileImg} className='h-[44px]' />
              <div className='fap-[4px] flex flex-col'>
                <span>장소이름</span>
                <div>
                  <span>5.0</span>
                </div>
              </div>
            </div>
            <IconComponent name='detail' color='text-gray-4' />
          </div>
          <ul className='flex gap-[8px] overflow-x-auto'>
            <li className='h-[80px] min-w-[128px] rounded-[4px] bg-blue-200'>
              fg
            </li>
            <li className='h-[80px] min-w-[128px] rounded-[4px] bg-blue-200'>
              fg
            </li>
            <li className='h-[80px] min-w-[128px] rounded-[4px] bg-blue-200'>
              fg
            </li>
          </ul>
          <p>
            후기 뭐라고 적어야할까.배고프다. 맛있다. 이용하는 사용자는 어떤걸
            좋아까 후기 뭐라고 적어야할까.배고프다. 맛있다. 이용하는 사용자는
            어떤걸 좋아까{' '}
          </p>
        </li>
      </ul>
    </main>
  );
};

export default MyReviews;
