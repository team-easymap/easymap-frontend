import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import IconComponent from '../ui/icon';

const SearchPOIResultHeader = () => {
  const navigate = useNavigate();
  return (
    <header className='flex items-center justify-between p-2'>
      <h1 className='ml-2 text-20B'>검색 결과</h1>
      <Button
        variant='ghost'
        size='icon'
        className='mt-0.5'
        onClick={() => navigate('/')}>
        <IconComponent name='close' />
      </Button>
    </header>
  );
};

export default SearchPOIResultHeader;
