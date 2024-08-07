// import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import IconComponent from '../ui/icon';
// import ArrowUpIcon from '@/assets/icons/arrow-up.svg?react';

interface HeaderProps {
  title: string;
  prevOnClick?: () => void;
  xBtnOnClick?: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  prevOnClick,
  xBtnOnClick,
  className
}) => {
  return (
    <header
      className={`${className} border-gray3 relative flex h-[58px] items-center border-b bg-white`}>
      {/* 이전 돌아가기 함수인 prevOnClick가 있다면 렌더링 */}
      {prevOnClick && (
        <button onClick={prevOnClick} className='absolute left-0 ml-4'>
          <IconComponent name='chevronLeft' />
        </button>
      )}

      {/* title text는 무조건 존재 */}
      <div className='flex flex-grow justify-center text-20B'>{title}</div>

      {/* x 버튼이 필요하여 xBtnOnClick가 있다면 xIcon 렌더링 */}
      {xBtnOnClick && (
        <button onClick={xBtnOnClick} className='absolute right-0 mr-4'>
          <IconComponent name='close' />
        </button>
      )}
    </header>
  );
};

export default Header;
