import Header from '@/components/common/Header';
import { useNavigate } from 'react-router-dom';
import SmileImg from '@/assets/smile.svg';
import IconComponent from '@/components/ui/icon';
import ImgItem from '@/components/my-reviews/imgItem';
import POIRatingComponent from '@/components/common/rating';
import Modal from '@/components/common/Modal';
import { useState } from 'react';

const MyReviews = () => {
  const navigate = useNavigate();

  // 모달 활성화 여부
  const [isOpen, setIsOpen] = useState(false);

  // 모달 토글 함수
  const modalToggle = () => {
    setIsOpen(!isOpen);
  };

  // 후기 삭제 함수
  const reviewDelete = () => {};
  return (
    <main>
      <Header title='내가 쓴 후기' prevOnClick={() => navigate(-1)} />

      <ul className='mx-auto my-0'>
        <li className='flex flex-col gap-[12px] border-b border-gray-3 px-[5%] py-[16px]'>
          <div className='flex h-[44px] items-center justify-between'>
            <div className='flex gap-[8px]'>
              <img src={SmileImg} className='h-[44px]' />
              <div className='fap-[4px] flex flex-col'>
                <span>장소이름</span>
                <div>
                  {/* <span>5.0</span> */}
                  <POIRatingComponent rating={4} score={5} />
                </div>
              </div>
            </div>
            <div onClick={() => modalToggle()}>
              <IconComponent name='detail' color='text-gray-4' />
            </div>
          </div>
          <ul className='flex max-w-[100%] gap-[8px] overflow-x-auto'>
            <ImgItem imgUrl='fdsf' />
            <ImgItem imgUrl='fdsf' />
            <ImgItem imgUrl='fdsf' />
          </ul>
          <p className='text-14R'>
            후기 뭐라고 적어야할까.배고프다. 맛있다. 이용하는 사용자는 어떤걸
            좋아까 후기 뭐라고 적어야할까.배고프다. 맛있다. 이용하는 사용자는
            어떤걸 좋아까{' '}
          </p>
        </li>
      </ul>

      {isOpen && (
        <Modal
          title={'후기를 삭제하시겠어요?'}
          subTitle={'삭제된 후기는 복구할 수 없어요!'}
          btnText={'후기 삭제'}
          toggleFC={modalToggle}
          approvalFC={reviewDelete}
        />
      )}
    </main>
  );
};

export default MyReviews;
