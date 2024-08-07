import { useNavigate } from 'react-router-dom';
import { CommonButton } from '../common/commonButton';
import { Input } from '../ui/input';

const MainSearchComponent = () => {
  const navigate = useNavigate();
  return (
    <div className='z-[900] flex justify-between gap-3 p-4'>
      <Input
        placeholder='검색어를 입력해주세요.'
        onFocus={() => navigate('/search/location')}
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
