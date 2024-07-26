import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import SearchClearButton from './search-clear-button';
import SearchForm from './search-form';

const SearchComponent = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between border-b-2 py-2'>
      <Button variant='ghost' onClick={() => navigate('/')}>
        👈
      </Button>
      <SearchForm />
      <SearchClearButton />
    </div>
  );
};

export default SearchComponent;
