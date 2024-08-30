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
            <ImgItem imgUrl='data:image/jpeg;base64,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' />
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
