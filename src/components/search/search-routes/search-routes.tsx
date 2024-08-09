import { Input } from '@/components/ui/input';
import SearchRotateButton from './rotate-button';
import { Button } from '@/components/ui/button';
import IconComponent from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const SearchRoutes = () => {
  const navigate = useNavigate();
  return (
    <div className='flex gap-3 px-3 py-4'>
      <SearchRotateButton />
      <div className='flex w-full flex-col gap-3'>
        <Input
          onFocus={() => navigate('/search/poi')}
          value='내위치: 서울시 성동구 땡땡땡'
        />
        <Input
          onFocus={() => navigate('/search/poi')}
          placeholder='도착지를 입력해주세요'
        />
      </div>
      <Button variant='ghost' size='icon' onClick={() => navigate('/')}>
        <IconComponent name='close' />
      </Button>
    </div>
  );
};

export default SearchRoutes;
