import { useNavigate } from 'react-router-dom';
import { CommonButton } from '../common/commonButton';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const MainSearchComponent = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-9 flex justify-between gap-3 mb-3'>
      <Input
        placeholder='검색어를 입력해주세요.'
        onFocus={() => navigate('/search')}
      />
      <CommonButton
      color='black'
      use='text'
      radius='small'
       onClick={() => navigate('/search')}>길찾기</CommonButton>
    </div>
  );
};

export default MainSearchComponent;
