import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import SearchClearButton from './search-clear-button';
import SearchForm from './search-form';
import IconComponent from '@/components/ui/icon';

const SearchComponent = () => {
  const navigate = useNavigate();
  return (
    <div className='relative flex justify-between gap-3 p-4'>
      <Button variant='ghost' size='icon' onClick={() => navigate('/')}>
        <IconComponent name='chevronLeft' />
      </Button>
      <SearchForm />
      <SearchClearButton />
    </div>
  );
};

export default SearchComponent;
