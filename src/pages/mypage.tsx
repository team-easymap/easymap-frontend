import Header from '@/components/common/Header';
import SmileImg from '@/assets/smile.svg';
import IconComponent from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '@/components/common/Modal';
import { logout } from '@/hooks/common/logout';

const Mypage = () => {
  const navigate = useNavigate();

  // 모달 활성화 여부
  const [isOpen, setIsOpen] = useState(false);

  const [modalInfo, setModalInfo] = useState({
    title: '',
    subTitle: '',
    btnText: '',
    approvalFC: () => {
      console.log('승인');
    }
  });

  const menuList = [
    {
      title: '내가 쓴 후기',
      icon: 'star',
      link: '/',
      function: null
    },
    {
      title: '이용약관',
      icon: 'page',
      link: '/',
      function: null
    },
    {
      title: '로그아웃',
      icon: 'out',
      link: '',
      function: () => {
        setModalInfo({
          title: '서비스를 로그아웃 하시겠어요?',
          subTitle: '',
          btnText: '로그아웃',
          approvalFC: () => {
            logout();
          }
        });
        modalToggle();
      }
    },
    {
      title: '탈퇴',
      icon: 'trash',
      link: '',
      function: () => {
        setModalInfo({
          title: '서비스를 탈퇴하시겠어요?',
          subTitle: '탈퇴하시면 나의 즐겨찾기 정보는 사라집니다.',
          btnText: '회원 탈퇴',
          approvalFC: () => {
            console.log('회원탈퇴');
          }
        });
        modalToggle();
      }
    }
  ] as const;

  // 모달 토글 함수
  const modalToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header title='마이 페이지' prevOnClick={() => console.log('이전')} />
      <main>
        <div className='flex items-center justify-between border-b border-b-[3px] border-gray-3 p-[16px]'>
          <div className='flex items-center gap-[17px]'>
            <img src={SmileImg} className='h-[48px] w-[48px]' />
            <span className='text-16M'>닉넴임</span>
          </div>
          <button
            onClick={() => navigate('/profileEdit')}
            className='h-[36px] rounded-[4px] bg-gray-1 pl-[16px] pr-[16px] text-14M'>
            수정
          </button>
        </div>

        <div>
          {menuList.map((v, i) => (
            <div
              key={i}
              // onClick시 v에 function이 있다면 실행하고 없다면 경로 이동
              onClick={() => (v.function ? v.function() : navigate(v.link))}
              className='flex items-center gap-[12px] border-b border-gray-3 p-[16px]'>
              <IconComponent name={v.icon} color='text-gray-6' />
              <span className='text-14M'>{v.title}</span>
            </div>
          ))}
        </div>

        {isOpen && (
          <Modal
            title={modalInfo.title}
            subTitle={modalInfo.subTitle}
            btnText={modalInfo.btnText}
            toggleFC={modalToggle}
            approvalFC={modalInfo.approvalFC}
          />
        )}
      </main>
    </>
  );
};

export default Mypage;
