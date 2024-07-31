import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const MainSearchComponent = () => {
  const navigate = useNavigate();
  return (
    <div className='z-[900] flex justify-between gap-3 p-4'>
      <Input
        placeholder='검색어를 입력해주세요.'
        onFocus={() => navigate('/search')}
      />
      <Button onClick={() => navigate('/search')}>👉</Button>
    </div>
  );
};

export default MainSearchComponent;
