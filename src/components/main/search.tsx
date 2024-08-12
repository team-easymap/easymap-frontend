import { useNavigate } from 'react-router-dom';
import { CommonButton } from '../common/commonButton';
import { Input } from '../ui/input';

const MainSearchComponent = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between w-full gap-3 mb-3 h-9'>
      <Input
        className='h-full'
        placeholder='검색어를 입력해주세요.'
        onFocus={() => navigate('/search/poi', { state: { type: 'poi' } })}
      />
      <CommonButton
        color='black'
        use='text'
        radius='small'
        onClick={() => navigate('/search/routes')}>
        길찾기
      </CommonButton>
    </div>
  );
};

export default MainSearchComponent;
