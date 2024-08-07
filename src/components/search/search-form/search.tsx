import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import SearchClearButton from './search-clear-button';
import SearchForm from './search-form';
import IconComponent from '@/components/ui/icon';

const SearchComponent = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between py-2'>
      <Button variant='ghost' onClick={() => navigate('/')}>
        <IconComponent name='chevronLeft' />
      </Button>
      <SearchForm />
      <SearchClearButton />
    </div>
  );
};

export default SearchComponent;
